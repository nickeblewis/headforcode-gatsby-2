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
              title="DaaS"
              subTitle="We have coined (possibly) a new term 'Developer as a Service' or DaaS for short. What this means is you pay us for the time we spend working on your solution and we serve numerous clients."
            />
            <IntroductionItem
              bold={true}
              title="Services"
              subTitle="Our services revolve around a few key areas, such as API based CMS systems and other integrations between the tools that you use for your business. We want to help you make your processes more efficient."
            />
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default TitleSection;
