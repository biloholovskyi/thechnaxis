import React from "react";
import styled from "styled-components";

import pres from './pres.svg';
import doc from './portfolio.pdf';
import play from './play.svg';

const FooterWrapper = styled.div`
  display: flex;
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
    }
    .icon {
      width: 21.5px;
      height: 28.5px;
      background-image: url(${play});
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
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
  }
`;

const Address = styled.div`
  font-size: 14px;
  line-height: 22px;
  color: #FFFFFF;
  opacity: 0.5;
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
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <LeftFooter>
        <InfoWrapper>
          <InfoItem>Доведем ваш IT-продукт от идеи до полноценного продукта.</InfoItem>
          <InfoItem>Быстро реализуем MVP, создаем новое с помощью R’n’D, оцифровываем бизнес процессы.</InfoItem>
        </InfoWrapper>
        <ShowVideo>
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
};

export default Footer;