import React from 'react';
import styled from "styled-components";

import Header from "../header/Header";
import Content from "../content/Content";

const AppWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background: #000;
  padding: 30px 25px;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <AppWrapper>
      <Header/>
      <Content/>
    </AppWrapper>
  );
}

export default App;
