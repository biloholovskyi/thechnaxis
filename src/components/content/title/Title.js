import React, {Component} from "react";
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
  transition: all .6s;
  transform: ${props => props.loaded ? 'translateX(0)' : 'translateX(-150%)'};
  &:nth-child(1) {
    transition-delay: .2s;
  }
  &:nth-child(2) {
    transition-delay: .5s;
  }
  &:nth-child(3) {
    transition-delay: .7s;
  }
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
    bottom: ${props => props.arrow ? '1px' : '0'};
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

export default class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({loaded: true});
    }, 100);
  }

  render() {
    const {loaded} = this.state;
    return (
      <TitleWrapper>
        <TitleItem loaded={loaded}>Разрабатываем{loaded}</TitleItem>
        <TitleItem loaded={loaded}>IT-продукты</TitleItem>
        <TitleItem arrow={true} loaded={loaded}>для бизнеса</TitleItem>
      </TitleWrapper>
    )
  }
};