import React, {Component} from 'react';
import styled from "styled-components";

import Header from "../header/Header";
import Content from "../content/Content";
import Video from "../video/Video";

const AppWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  background: #000;
  padding: 30px 25px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  align-items: stretch;
`;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: false
    }
  }

  showVideo = () => {
    this.setState({video: true});
  };

  closeVideo = () => {
    this.setState({video: false});
  };

  render() {
    return (
      <AppWrapper>
        {this.state.video ? <Video close={this.closeVideo}/> : false}
        <Header/>
        <Content show={this.showVideo}/>
      </AppWrapper>
    );
  }
}
