webpackJsonp([49951374107245],{474:function(n,s){n.exports={data:{markdownRemark:{html:'<p>Today I am investigating how we can integrate Stripe into a Gatsby website and as ever my first step is to do a little hunting via Google. So a quick search for "gatsby stripe" yielded the following results:</p>\n<ul>\n<li>gatsby-plugin-stripe-elements</li>\n<li>gatsby-plugin-stripe-checkout</li>\n<li>gatsby-source-stripe</li>\n<li>gatsby-stripe-source-products which has now been superseded by the aforementioned gatsby-source-stripe</li>\n</ul>\n<h2 id="so-lets-give-it-a-go"><a href="#so-lets-give-it-a-go" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>So lets give it a go!</h2>\n<p>Eager to try it out, I decided to give one of these plugins a try...</p>\n<p>First of all, install the plugin via NPM or Yarn, I have been using the latter recently, so we will use that:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>yarn add gatsby-plugin-stripe\n</code></pre>\n      </div>\n<p>This installs the plugin and adds it to the <code>package.json</code> file for me, which is great, as I will be deploying this change to <a href="https://netlify.com">Netlify</a> where this site is hosted.</p>\n<p>Next we must update the <code>gatsby-config.js</code> file so that this plugin is available for use.</p>\n<p>Add the following:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment" spellcheck="true">// In your gatsby-config.js</span>\nplugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    resolve<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`gatsby-source-stripe`</span></span><span class="token punctuation">,</span>\n    options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      objects<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'balance\'</span><span class="token punctuation">,</span> <span class="token string">\'customers\'</span><span class="token punctuation">,</span> <span class="token string">\'products\'</span><span class="token punctuation">,</span> <span class="token string">\'applicationFees\'</span><span class="token punctuation">,</span> <span class="token string">\'skus\'</span><span class="token punctuation">,</span> <span class="token string">\'subscriptions\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      secretKey<span class="token punctuation">:</span> <span class="token string">\'stripe_secret_key_here\'</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">]</span>\n</code></pre>\n      </div>\n<p>or modify whatever you already have. Swap the secretKey for your own, for which you will need to already have an account with Stripe. I used my Test mode key which is prefixed with <code>sk_test_</code>.</p>\n<p>You can edit the objects array to include or exclude as you wish, I whittled mine down to just customers and products. We will pick up on the products next.</p>\n<h2 id="ok-lets-take-it-to-the-next-step"><a href="#ok-lets-take-it-to-the-next-step" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Ok lets take it to the next step...</h2>\n<p>I am going to assume that you have an account with Stripe at this point and have already set up some products that we can use for test purposes.</p>\n<p>I set up a couple of products for a fictional online garden nursery, who specialise in perennial plants and deliver to your door ready for planting in your garden! We may actually build a real site for this in a future course series, which we will talk about more next year but I digress, back to the experiment...</p>\n<p>if you already have a Gatsby site, have installed the source plugin with a working Stripe account, then you can try this out by running your site locally. We shall use GraphiQL to run our queries and see what we get.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>http://localhost:8000/___graphql</code></pre>\n      </div>\n<p>Run the following query in the left-hand panel:</p>\n<div class="gatsby-highlight">\n      <pre class="language-graphql"><code><span class="token punctuation">{</span>\n  allStripeProduct <span class="token punctuation">{</span>\n    edges <span class="token punctuation">{</span>\n      node <span class="token punctuation">{</span>\n        name\n        id\n        description\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>You should see some results that will have originated from your Stripe account. Ours look like this and this will of course differ depending on how you\'ve gone about setting this up.</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"allStripeProduct"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">"edges"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n          <span class="token property">"node"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Roses"</span><span class="token punctuation">,</span>\n            <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"prod_BzT1Hcb0mMZkfI"</span><span class="token punctuation">,</span>\n            <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"A medium size Rose plant with pot"</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n          <span class="token property">"node"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Dahlias"</span><span class="token punctuation">,</span>\n            <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"prod_BzT0MjShqh6KrN"</span><span class="token punctuation">,</span>\n            <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"Lovely scented dahlias, assorted colours"</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>This is great because it proves that the API side of things are working a treat and the next step will be to incorporate this into our site. So for this I decided to build a component that can be included in any page.</p>\n<p>Here is what I did:</p>\n<ul>\n<li>I created a component under my src/components folder called StripeProductList, that looks something like this:</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment" spellcheck="true">// Code snipped for brevity</span>\n<span class="token keyword">class</span> <span class="token class-name">StripeProductList</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> products <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>Wrapper<span class="token operator">></span>\n      <span class="token operator">&lt;</span>Container<span class="token operator">></span>\n        <span class="token operator">&lt;</span>Row<span class="token operator">></span>\n          <span class="token operator">&lt;</span>TopTitle<span class="token operator">></span>The following products have been retrieved <span class="token keyword">from</span> our Stripe account<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>TopTitle<span class="token operator">></span>\n        <span class="token operator">&lt;</span><span class="token operator">/</span>Row<span class="token operator">></span>\n        <span class="token operator">&lt;</span>Row<span class="token operator">></span>\n        <span class="token punctuation">{</span>products<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span> node <span class="token punctuation">}</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n          <span class="token operator">&lt;</span>Product key<span class="token operator">=</span><span class="token punctuation">{</span>i<span class="token punctuation">}</span><span class="token operator">></span>\n            <span class="token operator">&lt;</span>Title<span class="token operator">></span>\n              <span class="token punctuation">{</span>node<span class="token punctuation">.</span>name<span class="token punctuation">}</span>\n            <span class="token operator">&lt;</span><span class="token operator">/</span>Title<span class="token operator">></span>\n            <span class="token operator">&lt;</span>SubTitle<span class="token operator">></span>\n              <span class="token punctuation">{</span>node<span class="token punctuation">.</span>description<span class="token punctuation">}</span>\n            <span class="token operator">&lt;</span><span class="token operator">/</span>SubTitle<span class="token operator">></span>\n            <span class="token operator">&lt;</span><span class="token operator">/</span>Product<span class="token operator">></span>\n        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n        <span class="token operator">&lt;</span><span class="token operator">/</span>Row<span class="token operator">></span>\n        <span class="token operator">&lt;</span><span class="token operator">/</span>Container<span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>Wrapper<span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> StripeProductList<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<ul>\n<li>I then included this as part of my layout file</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment" spellcheck="true">// Code snipped for brevity</span>\n<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> children<span class="token punctuation">,</span> data<span class="token punctuation">,</span> location <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">;</span>\n    <span class="token function">baseStyles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> pathname <span class="token punctuation">}</span> <span class="token operator">=</span> location<span class="token punctuation">;</span>\n    <span class="token keyword">const</span> title <span class="token operator">=</span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>data<span class="token punctuation">.</span>site<span class="token punctuation">.</span>siteMetadata<span class="token punctuation">.</span>title<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> | Nick Lewis - freelance web developer`</span></span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> products <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>data<span class="token punctuation">.</span>stripeProducts<span class="token punctuation">.</span>edges<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>Wrapper<span class="token operator">></span>\n        <span class="token operator">&lt;</span>Helmet\n          title<span class="token operator">=</span><span class="token punctuation">{</span>title<span class="token punctuation">}</span>\n          meta<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>\n            <span class="token punctuation">{</span>\n              name<span class="token punctuation">:</span> <span class="token string">\'description\'</span><span class="token punctuation">,</span>\n              content<span class="token punctuation">:</span> title<span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token operator">...</span>meta<span class="token punctuation">,</span>\n          <span class="token punctuation">]</span><span class="token punctuation">}</span>\n          link<span class="token operator">=</span><span class="token punctuation">{</span>link<span class="token punctuation">}</span>\n        <span class="token operator">></span>\n          <span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span> dir<span class="token operator">=</span><span class="token string">"ltr"</span> <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span><span class="token operator">/</span>Helmet<span class="token operator">></span>\n        <span class="token operator">&lt;</span>Header title<span class="token operator">=</span><span class="token punctuation">{</span>data<span class="token punctuation">.</span>site<span class="token punctuation">.</span>siteMetadata<span class="token punctuation">.</span>title<span class="token punctuation">}</span> pathname<span class="token operator">=</span><span class="token punctuation">{</span>pathname<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token punctuation">{</span><span class="token function">children</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n        <span class="token operator">&lt;</span>StripeProductList products<span class="token operator">=</span><span class="token punctuation">{</span>products<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>Footer <span class="token operator">/</span><span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>Wrapper<span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<ul>\n<li>\n<p>I changed my GraphQL fragment to retrieve the relevant fields:</p>\n<div class="gatsby-highlight">\n      <pre class="language-graphql"><code>export const <span class="token keyword">query</span> <span class="token operator">=</span> graphql`\n<span class="token keyword">query</span> DocLayoutWithProductsQuery <span class="token punctuation">{</span>\n<span class="token attr-name">stripeProducts</span><span class="token punctuation">:</span> allStripeProduct <span class="token punctuation">{</span>\n  edges <span class="token punctuation">{</span>\n    node <span class="token punctuation">{</span>\n      name\n      id\n      description\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token attr-name">site</span><span class="token punctuation">:</span> site <span class="token punctuation">{</span>\n  siteMetadata <span class="token punctuation">{</span>\n    title\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n`;\n</code></pre>\n      </div>\n</li>\n</ul>\n<p>I have snipped my code somewhat here to keep it brief and shall be writing more about this topic in later posts. We have yet to implement a checkout of course but all of that will come in the form of an all-singing example project. Have fun!</p>\n<h2 id="finally"><a href="#finally" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Finally</h2>\n<p>The Red block below shows two of the products from my Test account to wrap this up and present what is possible with GatsbyJS and Stripe. I am excited by this because there is a lot that can be achieved thanks to the genius inclusion of GraphQL within GatsbyJS. A real stroke of Genius and one that is a game changer!</p>',frontmatter:{title:"How to integrate Stripe into a Gatsby site",date:"December 21, 2017",author:["nickeblewis"]},fields:{path:"blog/2017-12-21-gatsby-stripe.md",slug:"/blog/2017/12/21/gatsby-stripe/"}},site:{siteMetadata:{title:"HeadForCode"}}},pathContext:{slug:"/blog/2017/12/21/gatsby-stripe/",layout:"sidebar-layout-with-products",_PARENT:"SOURCE"}}}});
//# sourceMappingURL=path---blog-2017-12-21-gatsby-stripe-482cb601c4b499d3b9ef.js.map