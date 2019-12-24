import React from "react";
import styled from "styled-components";

import logo from './logo.svg';
import small from './small.svg';

const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
`;

const Logo = styled.img`
  object-fit: contain;
  object-position: center;
  width: 186px;
  height: 43px;
  @media (max-width: 470px) {
    width: 103.71px;
    height: 23.62px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -11.81px;
    margin-left: -51.855px;
  }
`;

const SmallLogo = styled(Logo)`
  margin-right: 181px;
  width: 29.67px;
  height: 37.81px;
  @media (max-width: 470px) {
    width: 16.43px;
    height: 20.54px;
    margin-right: 0;
    margin-top: 0;
    margin-left: 0;
    top: 0;
    left: 0;
    position: relative;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <SmallLogo src={small}/>
      <Logo src={logo}/>
    </HeaderWrapper>
  )
};

export default Header;