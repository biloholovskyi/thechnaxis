import React from "react";
import styled from "styled-components";

import Title from "./title/Title";
import Footer from "./footer/Footer";

const ContentWrapper = styled.section`
  display: flex;
  padding-top: 60px;
  height: 100vh;
`;

const Left = styled.div`
  width: 626px;
  min-width: 626px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Content = () => {
  return (
    <ContentWrapper>
      <Left>
        <Title/>
        <Footer/>
      </Left>
    </ContentWrapper>
  )
};

export default Content;