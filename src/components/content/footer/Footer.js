import React, {Component} from "react";
import styled from "styled-components";

import Video from "../../video/Video";

import pres from './pres.svg';
import doc from './portfolio.pdf';
import play from './play.svg';

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
  margin-right: 36px;
  &:nth-child(2) {
    margin-right: 0;
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
  @media (max-width: 470px) {
    font-size: 20px;
    line-height: 26px;
    padding: 21px 17px 25px 27px;
  }
  @media (max-width: 375px) {
    font-size: 18px;
  }
  &:hover {
    cursor: pointer;
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
      @media (max-width: 375px) {
        width: 18px;
        height: 23.5px;
      }
    }
  }
`;

const Contacts = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 35px;
  margin-bottom: 16px;
  .contact {
    font-size: 20px;
    line-height: 20px;
    color: #FFFFFF;
    font-family: "Theinhardt Pan";
    display: block;
    width: 100%;
    margin-right: 16px;
    @media (max-width: 450px) {
      font-size: 16px;
      line-height: 16px;
    }
    &:last-child {
      margin-right: 0;
    }
  }
`;

const Address = styled.div`
  font-size: 14px;
  line-height: 22px;
  color: #FFFFFF;
  opacity: 0.5;
  @media (max-width: 370px) {
    font-size: 12px;
    line-height: 18px;
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
  margin-left: 42px;
  @media (max-width: 1200px) {
    margin-left: 0;
    width: max-content;
    margin-bottom: 9px;
  }
  &:hover {
    cursor: pointer;
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
      video: false
    }
  }

  render() {
    return (
      <FooterWrapper>
        {this.state.video ? <Video/> : false}
        <LeftFooter>
          <InfoWrapper>
            <InfoItem>Доведем ваш IT-продукт от идеи до полноценного продукта.</InfoItem>
            <InfoItem>Быстро реализуем MVP, создаем новое с помощью R’n’D, оцифровываем бизнес процессы.</InfoItem>
          </InfoWrapper>
          <ShowVideo onClick={this.props.show}>
            Смотреть шоурил
            <div className="video-info">
              <div className="time">0:12</div>
              <div className="icon"></div>
            </div>
          </ShowVideo>
          <Contacts>
            <a href="tel:78432024229" className="contact">+7843 202-4229</a>
            <a href="mailto:info@technaxis.ru" className="contact">info@technaxis.ru</a>
          </Contacts>
          <Address>Петербургская ул., 35, Казань, респ. Татарстан, Россия, 420111</Address>
        </LeftFooter>
        <Presentation href={doc} target='_blank'>
          Презентация
          <PresentationLine/>
          <PresentationSize>12 mb</PresentationSize>
        </Presentation>
      </FooterWrapper>
    )
  }
};