import React from "react";
import styled from "styled-components";

import arrow from './arrow.svg';

const TitleWrapper = styled.div`

`;

const TitleItem = styled.div`
  font-size: 90px;
  line-height: 80px;
  letter-spacing: -0.025em;
  color: #FFFFFF;
  position: relative;
  text-align: right;
  margin: 0 0 26px 0;
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: #fff;
    opacity: 0.5;
    bottom: 0;
    left: 0;
  }
  &::before {
    content: '';
    position: absolute;
    width: 53.15px;
    height: 38px;
    bottom: 12px;
    left: 0;
    background-image: url(${arrow});
    display: ${props => props.arrow ? 'block' : 'none'};
  }
`;

const Title = () => {
  return (
    <TitleWrapper>
      <TitleItem>Разрабатываем</TitleItem>
      <TitleItem>IT-продукты</TitleItem>
      <TitleItem arrow={true}>для бизнеса</TitleItem>
    </TitleWrapper>
  )
};

export default Title;