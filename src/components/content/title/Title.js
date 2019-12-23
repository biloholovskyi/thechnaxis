import React from "react";
import styled from "styled-components";

import arrow from './arrow.svg';

const TitleWrapper = styled.div`
  margin-bottom: 100px;
  @media (max-width: 991px) {
    margin-bottom: 25px;
  }
`;

const TitleItem = styled.div`
  font-size: 90px;
  line-height: 80px;
  letter-spacing: -0.025em;
  color: #FFFFFF;
  position: relative;
  text-align: right;
  margin: 0 0 26px 0;
  @media (max-width: 1200px) {
    font-size: 60px;
    line-height: 50px;
  }
  @media (max-width: 470px) {
    font-size: 55px;
    line-height: 45px;
  }
   @media (max-width: 450px) {
    font-size: 45px;
    line-height: 35px;
  }
  @media (max-width: 370px) {
    font-size: 35px;
    line-height: 25px;
  }
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
    background-position: left center;
    background-size: contain;
    display: ${props => props.arrow ? 'block' : 'none'};
    @media (max-width: 470px) {
      width: 29.78px;
      height: 21.56px;
    }
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