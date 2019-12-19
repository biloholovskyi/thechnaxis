import React from "react";
import styled from "styled-components";

import logo from './logo.svg';
import small from './small.svg';

const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  object-fit: contain;
  object-position: center;
  width: 186px;
  height: 43px;
`;

const SmallLogo = styled(Logo)`
  margin-right: 178px;
  width: 29.67px;
  height: 37.81px;
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