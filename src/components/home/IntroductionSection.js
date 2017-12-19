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
              subTitle="We are primarily a consultancy business, we love to solve problems for other businesses through the use of smart technology. You can find out more through this site."
            />
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default TitleSection;
