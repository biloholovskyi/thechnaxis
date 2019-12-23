import React, {Component} from "react";
import styled from "styled-components";

import Title from "./title/Title";
import Footer from "./footer/Footer";
import ThreeD from "./object/ThreeD";

const ContentWrapper = styled.section`
  display: flex;
  padding-top: 60px;
  height: 100%;
  flex: 1;
  @media (max-width: 1025px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 626px;
  min-width: 626px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 1200px) {
    width: 450px;
    min-width: 450px;
  }
`;

const Bottom = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
`;

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responsive: 1,
      loading: true
    }
  }

  componentDidMount() {
    this.checkSize();
    this.setState({loading: false});
    window.addEventListener("resize", this.checkSize);
  }

  checkSize = () => {
    const width = window.innerWidth;
    if (width < 1026 && width > 991) {
      this.setState({responsive: 2})
    } else if (width < 992) {
      this.setState({responsive: 3})
    } else {
      this.setState({responsive: 1})
    }
  };

  render() {
    const {loading, responsive} = this.state;
    const content = loading ? false : responsive === 1 ? (
      <ContentWrapper>
        <Left>
          <Title/>
          <Footer show={this.props.show}/>
        </Left>
        <ThreeD/>
      </ContentWrapper>
    ) : responsive === 2 ? (
      <ContentWrapper>
        <Left>
          <Title/>
        </Left>
        <Bottom>
          <Footer show={this.props.show}/>
          <ThreeD/>
        </Bottom>
      </ContentWrapper>
    ) : (
      <ContentWrapper>
        <Title/>
        <ThreeD/>
        <Footer show={this.props.show}/>
      </ContentWrapper>
    );
    return (
      <>
        {content}
      </>
    )
  }
};