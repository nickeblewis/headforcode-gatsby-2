---
title: "Gatsby Love"
date: "2017-12-06"
author: [nickeblewis]
---

This website is developed with GatsbyJS and I love it, I must take this opportunity to say thanks to the man who created it [Kyle Matthews](https://github.com/KyleAMathews) but let's explain what it actually is first.

## JAMStack

The [JAMStack](https://jamstack.org/) is as they state on their site:

_Modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup._

Ok I am paraphrasing the official site here somewhat but in the days of old we used to refer to the collective of Operating Systems, web servers, backend code and databases as the stack. A stack would span both server side and more and more in recent years, the client side. It has become prevalent in our industry for apps to become more client-side heavy.

In essence the JAMStack enables us to deliver sites that are more performant, far more secure, cost effective to scale upwards and at the same time to improve the developer's working life. We all wish we can work with easier, nicer tools as that benefit can be passed onto the client too. All of which must be a great thing. Well it is and I aim to share this with you!

JAM stands for Javascript, APIs and Markup. 

## Enter GatsbyJS

So let's get our teeth into building a JAMStack project! It will somewhat resemble the HeadForCode site. We shall show you where the JavaScript comes into the equation, how external APIs can be connected and show you how to write the markup. We shall use Gatsby to achieve this of course!

## Before we get stuck in

We will need to make sure that we have Node and NPM installed first. You may already have this setup but if you don't, this is where I refer you to an external resource to get up and running!

[Node and NPM installation](https://nodejs.org/)

This will lead you to page that identifues whether you are running with a Mac, Windows or Linux OS and takes you through the steps of getting up and running with Node and NPM.

You can at any time (well recommended) refer to the [offical GatsbyJS site](https://www.gatsbyjs.org/#/) to learn more about the features that Gatsby offers, as the purpose of this article is to help show you how easy it is to get up and running with Gatsby.

## Now to build a quick site!

Yes, it is possible to just chuck something together and revel in the glory of seeing your own website on-screen, Not being funny, every project starts off this way and then you develop it into something more sophisticated....

* Open up a terminal, could be Git Bash for Windows or Terminal on Mac/Linux
* Change directory to a place on your system where you shall be keeping your we
b projects mine is called "code" which sits under my home folder

``` bash
npm install --global gatsby-cli
```

Then having installed the Gatsby tools globally on your system, we can create the basic site

``` bash
gatsby new gatsby-site
cd gatsby-site
gatsby-develop
```

The above commands generate the new site, change directory into it and the last step runs a hot-reloading project at ```localhost:8000``` meaning that as you make changes to you code, the browser will refresh automatically to reflect them.

Now open ```localhost:8000``` in your browser and you shall see your site! Ok I admit it's nothing too exciting at this stage, it is a two pager but from this point you can create some amazing sites.

In this series I shall also show you how you use Gatsby to:

* Deploy sites to Netlify
* Automate builds via Github