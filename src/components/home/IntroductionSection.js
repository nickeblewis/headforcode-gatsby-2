import React, { Component } from 'react';
import styled from 'styled-components';

import { rhythm } from '../../utils/typography';
import media from '../../css/media';

import IntroductionItem from './IntroductionItem';

const Wrapper = styled.section`
  display: flex;
  height: auto;
  padding: 50px 0;
  justify-content: center;

  @media (${media.tablet}) {
    padding: 20px 0;
  }
`;

const Container = styled.div`
  display: flex;
  width: calc(1024px + ${rhythm(0.5)});
  height: 100%;
  margin: 0 ${rhythm(0.5)};
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  margin: ${rhythm(0.5)} 0;

  @media (${media.tablet}) {
    margin: 0;
    flex-wrap: wrap;
  }
`;

class TitleSection extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Row>
            <IntroductionItem
              bold={true}
              title="Teaching"
              subTitle="We are learning all of the time and we love to share our experiences with the development community. We plan to release a mixture of FREE and premium courses in the months to come."
            />
            <IntroductionItem
              bold={true}
              title="Consultancy"
              subTitle="We love to solve problems for other businesses through the use of smart technology. We are advocates for the mobile web and ensuring that we all have quick and easy access to information wherever and whenever we need it."
            />
            <IntroductionItem
              bold={true}
              title="Solutions"
              subTitle="We are not fans of re-inventing the wheel completely each time we start a new project. So during quieter periods we keep busy. We are gradually building our own tools and web components for use in future client projects."
            />
            <IntroductionItem
              bold={true}
              title="Find out more..."
              subTitle="We will be investing more time in our website this year to make sure it's packed with interesting information on coding, building digital businesses and other inspirational material. What's more, we are going to be focussing on the mobile experience, so that headforcode.com becomes your pocket guide to app development!"
            />
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default TitleSection;
