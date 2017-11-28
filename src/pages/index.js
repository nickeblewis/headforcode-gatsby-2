import React, { Component } from 'react';
// import StarRatingComponent from 'react-star-rating-component'
import Link from 'gatsby-link';
import styled from 'styled-components';

import LandscapeSection from '../components/home/LandscapeSection';
import IntroductionSection from '../components/home/IntroductionSection';
import ServicesSection from '../components/home/ServicesSection';
import CTASection from '../components/home/CTASection';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

class IndexPage extends Component {
  render() {
    const posts = this.props.data.posts.edges;
    // const towns = this.props.data.towns.edges
    const products = this.props.data.products.edges;

    return (
      <Wrapper>
        <LandscapeSection />
        <IntroductionSection />
        <ServicesSection services={products} />
        {/* <CTASection /> */}
      </Wrapper>
    );
  }
}

export default IndexPage;

export const pageQuery = graphql`
  query getAllLocationsEvents {
    posts: allBlogPosts {
      edges {
        node {
          id
          postTitle
          postSlug
          postContent
          postDateAndTime
          postImage {
            id
          }
          authors {
            authorName
          }
        }
      }
    }
    products: allProducts {
      edges {
        node {
          id
          productTitle
          productDescription
          productImage {
            id
            handle
            width
            height
          }
        }
      }
    }
  }
`;
