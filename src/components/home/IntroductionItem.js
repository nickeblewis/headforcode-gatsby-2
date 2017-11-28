import React, { Component } from 'react';
import styled from 'styled-components';

import media from '../../css/media';

const Wrapper = styled.div`
  display: flex;
  padding-right: 2em;
  flex-direction: column;
  flex-basis: 50%;

  @media (${media.tablet}) {
    padding-right: 0;
    flex-basis: 100%;
  }
`;

const Title = styled.h2`
  color: #3c3c3c;
  font-size: 37px;
  font-weight: bold;
  letter-spacing: -1px;

  @media (${media.tablet}) {
    margin-bottom: 0.5em;
    font-size: 28px;
  }
`;

const SubTitle = styled.p`
  color: #767676;
  font-size: 20px;
  line-height: 1.6;

  @media (${media.tablet}) {
    font-size: 16px;
  }
`;

class IntroductionItem extends Component {
  render() {
    const { title, subTitle, picture } = this.props;
    return (
      <Wrapper>
        <Title>{title}</Title>
        <img
          src={`https://media.graphcms.com/resize=w:512,h:512,a:top,fit:scale/${picture}`}
          alt={title}
          title={title}
          width="256"
        />
        <SubTitle>{subTitle}</SubTitle>
      </Wrapper>
    );
  }
}

export default IntroductionItem;
