import React, {Component} from "react";
import styled, {keyframes} from "styled-components";

import Video from "../../video/Video";

import pres from './pres.svg';
import play from './play.svg';

const doc = 'https://technaxis.com/portfolio.pdf';

const FooterWrapper = styled.div`
  display: flex;
  @media (max-width: 1200px) {
    flex-direction: column-reverse;
  }
  @media (max-width: 1025px) {
    width: 400px;
    min-width: 400px;
  }
  @media (max-width: 991px) {
    width: 100%;
    min-width: 100%;
  }
`;

const LeftFooter = styled.div`

`;

const InfoWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 25px;
`;

const InfoItem = styled.div`
  width: 100%;
  font-size: 14px;
  line-height: 22px;
  color: #FFFFFF;
  opacity: 0.5;
  margin-right: 21px;
  transition: all .4s;
  transform: ${props => props.loaded ? 'translateX(0)' : 'translateX(-1000px)'};
  &:nth-child(1) {
    transition-delay: 1s;
  }
  &:nth-child(2) {
    margin-right: 0;
    transition-delay: .7s;
  }
`;

const ShowVideo = styled.div`
  font-weight: bold;
  font-size: 20px;
  line-height: 26px;
  color: #FFFFFF;
  border: 1px solid rgba(255, 255, 255, .5);
  box-sizing: border-box;
  border-radius: 55px;
  padding: 21px 27px 25px 37px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all .5s;
  transform: ${props => props.loaded ? 'translateX(0)' : 'translateX(-1000px)'};
  transition-delay: .8s;
  @media (max-width: 470px) {
    font-size: 20px;
    line-height: 26px;
    padding: 21px 17px 25px 27px;
  }
  @media (max-width: 375px) {
    font-size: 18px;
  }
  .video-info {
    display: flex;
    align-items: center;
    .time {
      font-weight: normal;
      font-size: 14px;
      line-height: 26px;
      color: #FFFFFF;   
      opacity: 0.9;
      margin-right: 24px;
      @media (max-width: 470px) {
        margin-right: 15px;
      }
    }
    .icon {
      width: 21.5px;
      height: 28.5px;
      background-image: url(${play});
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
      transition: all .3s;
      @media (max-width: 375px) {
        width: 18px;
        height: 23.5px;
      }
    }
  }
  &:hover {
    cursor: pointer;
  }
`;

const Contacts = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 35px;
  margin-bottom: 16px;
`;

const Contact = styled.a`
  font-size: 20px;
  line-height: 20px;
  color: #FFFFFF;
  font-family: "Theinhardt Pan";
  display: block;
  width: 100%;
  margin-right: 21px;
  transition: all .4s;
  transform: ${props => props.loaded ? 'translateX(0)' : 'translateX(-1000px)'};
  &:nth-child(1) {
    transition-delay: .8s;
  }
  &:nth-child(2) {
    transition-delay: .6s;
  }
  @media (max-width: 450px) {
    font-size: 16px;
    line-height: 16px;
  }
  &:last-child {
    margin-right: 0;
  }
`;

const Address = styled.div`
  font-size: 14px;
  line-height: 22px;
  color: #FFFFFF;
  opacity: ${props => props.loaded ? '0.5' : '0'};;
  transition: all .9s;
  transform: ${props => props.loaded ? 'translateY(0)' : 'translateY(15px)'};
  transition-delay: 1s;
  @media (max-width: 370px) {
    font-size: 12px;
    line-height: 18px;
  }
`;

const PresentationAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(15px);
  }
`;

const Presentation = styled.a`
  font-weight: bold;
  font-size: 20px;
  line-height: 26px;
  text-align: right;
  color: #FFFFFF;
  position: relative;
  height: max-content;
  margin-left: 84px;
  transition: all .4s;
  transform: ${props => props.loaded ? 'translateX(0)' : 'translateX(-1000px)'};
  transition-delay: .8s;
  @media (max-width: 1200px) {
    margin-left: 0;
    width: max-content;
    margin-bottom: 9px;
  }
  &:hover {
    cursor: pointer;
    &::after {
      animation: ${PresentationAnimation} infinite 1s; 
    }
  }
  &::after {
    content: '';
    position: absolute;
    width: 57px;
    height: 56px;
    top: -75px;
    right: 0;
    background-image: url(${pres});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    @media (max-width: 1200px) {
      right: auto;
      left: 0;
    }
  }
`;

const PresentationLine = styled.div`
  width: 100%;
  height: 1px;
  opacity: 0.5;
  background-color: #FFFFFF;
  left: 0;
  margin-top: 4px;
`;

const PresentationSize = styled.div`
  margin-top: 6px;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  text-align: right;
  color: #FFFFFF;
  opacity: 0.5;
  @media (max-width: 1200px) {
    text-align: left;
  }
`;

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: false,
      loaded: false
    }
  }

  componentDidMount() {
    this.setState({loaded: true});
  }

  render() {
    return (
      <FooterWrapper>
        {this.state.video ? <Video/> : false}
        <LeftFooter>
          <InfoWrapper>
            <InfoItem loaded={this.state.loaded}>Доведем ваш IT-продукт от идеи до полноценного продукта.</InfoItem>
            <InfoItem loaded={this.state.loaded}>Быстро реализуем MVP, создаем новое с помощью R’n’D, оцифровываем бизнес процессы.</InfoItem>
          </InfoWrapper>
          <ShowVideo onClick={this.props.show} loaded={this.state.loaded}>
            Смотреть шоурил
            <div className="video-info">
              <div className="time">01:12</div>
              <div className="icon"></div>
            </div>
          </ShowVideo>
          <Contacts>
            <Contact href="tel:78432122072" loaded={this.state.loaded}>+7 (843) 212-20-72</Contact>
            <Contact href="mailto:info@technaxis.com" loaded={this.state.loaded}>info@technaxis.com</Contact>
          </Contacts>
          <Address loaded={this.state.loaded}>ул. Некрасова, д. 21, г. Казань, Респ. Татарстан, 420012</Address>
        </LeftFooter>
        <Presentation href={doc} target='_blank' loaded={this.state.loaded}>
          Презентация
          <PresentationLine/>
          <PresentationSize>30,6 мб</PresentationSize>
        </Presentation>
      </FooterWrapper>
    )
  }
};