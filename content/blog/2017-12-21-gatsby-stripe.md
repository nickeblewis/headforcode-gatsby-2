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

## So lets give it a go!

Eager to try it out, I decided to give one of these plugins a try...

First of all, install the plugin via NPM or Yarn, I have been using the latter recently, so we will use that:

```bash
yarn add gatsby-plugin-stripe
```

This installs the plugin and adds it to the ```package.json``` file for me, which is great, as I will be deploying this change to [Netlify](https://netlify.com) where this site is hosted.

Next we must update the ```gatsby-config.js``` file so that this plugin is available for use.

Add the following:

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

or modify whatever you already have. Swap the secretKey for your own, for which you will need to already have an account with Stripe. I used my Test mode key which is prefixed with ```sk_test_```.

You can edit the objects array to include or exclude as you wish, I whittled mine down to just customers and products. We will pick up on the products next.

## Ok lets take it to the next step...

I am going to assume that you have an account with Stripe at this point and have already set up some products that we can use for test purposes.

I set up a couple of products for a fictional online garden nursery, who specialise in perennial plants and deliver to your door ready for planting in your garden! We may actually build a real site for this in a future course series, which we will talk about more next year but I digress, back to the experiment...

if you already have a Gatsby site, have installed the source plugin with a working Stripe account, then you can try this out by running your site locally. We shall use GraphiQL to run our queries and see what we get.

```
http://localhost:8000/___graphql
```

Run the following query in the left-hand panel:

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

You should see some results that will have originated from your Stripe account. Ours look like this and this will of course differ depending on how you've gone about setting this up.

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

This is great because it proves that the API side of things are working a treat and the next step will be to incorporate this into our site. So for this I decided to build a component that can be included in any page.

Here is what I did:

* I created a component under my src/components folder called StripeProductList, that looks something like this:

```JavaScript
// Code snipped for brevity
class StripeProductList extends Component {

  render() {
    const { products } = this.props;

    return (
      <Wrapper>
      <Container>
        <Row>
          <TopTitle>The following products have been retrieved from our Stripe account!</TopTitle>
        </Row>
        <Row>
        {products.map(({ node }, i) => (
          <Product key={i}>
            <Title>
              {node.name}
            </Title>
            <SubTitle>
              {node.description}
            </SubTitle>
            </Product>
        ))}
        </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default StripeProductList;
```

* I then included this as part of my layout file

```JavaScript
// Code snipped for brevity
render() {
    const { children, data, location } = this.props;
    baseStyles();
    const { pathname } = location;
    const title = `${data.site.siteMetadata.title} | Nick Lewis - freelance web developer`;
    const products = this.props.data.stripeProducts.edges;
    return (
      <Wrapper>
        <Helmet
          title={title}
          meta={[
            {
              name: 'description',
              content: title,
            },
            ...meta,
          ]}
          link={link}
        >
          <html lang="en" dir="ltr" />
        </Helmet>
        <Header title={data.site.siteMetadata.title} pathname={pathname} />
        {children()}
        <StripeProductList products={products} />
        <Footer />
      </Wrapper>
    );
  }
  ```
* I changed my GraphQL fragment to retrieve the relevant fields:
```GraphQL
export const query = graphql`
  query DocLayoutWithProductsQuery {
    stripeProducts: allStripeProduct {
      edges {
        node {
          name
          id
          description
        }
      }
    }
    site: site {
      siteMetadata {
        title
      }
    }
  }
`;
```

I have snipped my code somewhat here to keep it brief and shall be writing more about this topic in later posts. We have yet to implement a checkout of course but all of that will come in the form of an all-singing example project. Have fun!

## Finally

The Red block below shows two of the products from my Test account to wrap this up and present what is possible with GatsbyJS and Stripe. I am excited by this because there is a lot that can be achieved thanks to the genius inclusion of GraphQL within GatsbyJS. A real stroke of Genius and one that is a game changer!
