---
title: How to move changes from master to a new branch
date: 2018-02-02
---

## The scenario

We have all done this before, made changes and then realised that we are about to commit them to master where we want to raise a pull-request with someone, meaning we should have created a branch before we started. Sound familiar?

## The solution

Well it is easy because using the following three steps, you can move the changes over to a new branch

- make changes
- `git stash save`
- `git checkout -b xxx`
- `git stash pop`

Where `xxx` is the new branch name