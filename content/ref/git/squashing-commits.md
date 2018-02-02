---
title: Squashing Git Commits
date: 2018-02-02
---

## Squashing Git Commits

## The easy and flexible way

This method avoids merge conflicts if you have periodically pulled master into your branch. It also gives you the opportunity to squash into more than 1 commit, or to re-arrange your code into completely different commits (e.g. if you ended up working on three different features but the commits were not consecutive).

***Note: You cannot use this method if you intend to open a pull request to merge your feature branch.* This method requires committing directly to master.**

Switch to the master branch and make sure you are up to date:

```sh
git checkout master && git pull
```

Merge your feature branch into the master branch locally:

```sh
git merge feature_branch
```

Reset the local master branch to origin's state:

```sh
git reset origin/master
```

Now all of your changes are considered as unstaged changed. You can stage and commit them into one or more commits.

```sh
git add . --all
git commit
```

([Source](http://makandracards.com/makandra/527-squash-several-git-commits-into-a-single-commit))

## The hard(er) and less flexible way

This method only allows you to squash the last X consecutive commits into a single commit. Also, if you have merged master into your branch along the way, you will have to manually merge your new (squashed) commit into master and resolve the merge conflicts.

Use this method if you have not merged master into your branch, you plan to combine all commits into one, and you only changed one feature of the project; or, regardless of those conditions, you must use this method if you intend to open a pull request to merge your code.

### Combining the commits

To squash the last **3** commits into one:

```sh
git reset --soft HEAD~3
git commit -m "New message for the combined commit"
```

### Pushing the squashed commit

#### If the commits **have** been pushed to the remote:

```sh
git push origin +name-of-branch
```

*The plus sign forces the remote branch to accept your rewritten history, otherwise you will end up with divergent branches*

#### If the commits have **NOT** yet been pushed to the remote:

```sh
git push origin name-of-branch
```

In other words, just a normal push like any other

---

Main source: http://stackoverflow.com/a/5201642/348995  
Source for info about when commits where already pushed: http://stackoverflow.com/a/5668050/348995 