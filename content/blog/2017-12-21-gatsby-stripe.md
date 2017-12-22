---
title: "How to integrate Stripe into a Gatsby site"
date: "2017-12-21"
author: [nickeblewis]
layout: "sidebar-layout-with-products"
---

Today I am investigating how we can integrate Stripe into a Gatsby website and as ever my first step is to do a little hunting via Google. So a quick search for "gatsby stripe" yielded the following results:

* gatsby-plugin-stripe-elements
* gatsby-plugin-stripe-checkout
* gatsby-source-stripe
* gatsby-stripe-source-products which has now been superseded by the aforementioned gatsby-source-stripe

The community around GatsbyJS is rapidly growing and it is exciting to see what people are developing as open-source, maybe if I get the chance, I will do so too.

## So lets give it a go!

Eager to try it out by adding a demo page to this site, I decided to give one of these plugins a try...

First of all install the plugin via NPM or Yarn, I have been using the latter recently, so we will use that:

```bash
yarn add gatsby-plugin-stripe
```

This installs the plugin and adds it to the ```package.json``` file for me, which is great, as I will be deploying this change to Netlify where this site is hosted.

Next we must update the ```gatsby-config.js``` file so that this plugin is available for use.

So add this:

```JavaScript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-source-stripe`,
    options: {
      objects: ['balance', 'customers', 'products', 'applicationFees', 'skus', 'subscriptions'],
      secretKey: 'stripe_secret_key_here'
    }
  }
]
```

or modify whatever you already have. Swap the secretKey for your own, for which you will need to already have an account with Stripe. I used my Test mode key which is prefixed with ```sk_test_```

You can edit the objects array to include or exclude as you wish, I whittled mine down to just customers and products. We will pick up on the products next in some GraphQL examples...

## Ok lets take it to the next step...

I am going to assume that you have an account with Stripe at this point and have perhaps set up some products on there already?

I set up a couple of products for an imaginary florist, well in fact next year I may be building a site for a real one, so this is good practice for that potential project.

if you already have a Gatsby site, you can try this out by running your site locally:

```
http://localhost:8000/___graphql
```

Run the following query:

```GraphQL
{
  allStripeProduct {
    edges {
      node {
        name
        id
        description
      }
    }
  }
}
```

You should see some results and they will differ to mine depending on how you've set up your products on Stripe.

```json
{
  "data": {
    "allStripeProduct": {
      "edges": [
        {
          "node": {
            "name": "Roses",
            "id": "prod_BzT1Hcb0mMZkfI",
            "description": "A medium size Rose plant with pot"
          }
        },
        {
          "node": {
            "name": "Dahlias",
            "id": "prod_BzT0MjShqh6KrN",
            "description": "Lovely scented dahlias, assorted colours"
          }
        }
      ]
    }
  }
}
```

This is great because it proves that the API side of things are working a treat and the next step will be to incorporate this into this site. I will be building a component that can be included in any page.

Here is how:

* First of all I created a component in my project called ```<StripeProductList>``` and then I included this in my Gatsby layout for documents with the type of sidebar-layout-with-products
* You can see it appears at the bottom of this page only and not others across this website
