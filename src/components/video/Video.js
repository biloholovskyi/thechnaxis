import React, {Component} from "react";
import styled from "styled-components";

import showreel from './showreel.mp4';
import btn from './btn.gif';
import close from './close.svg';

const VideoWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 7126478126;
  background-color: #000;
  video {
    width: 100%;
    height: 100%;
  }
  .btn-start {
    width: 172px;
    height: 235px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -117.5px 0 0 -86px;
    transition: all .3s;
    img {
      display: block;
      object-position: center;
      object-fit: contain;
      width: 100%;
      height: 100%;
      opacity: 0.2;
      transition: all .3s;
    }
    .text {
      color: #fff;
      font-size: 20px;
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      text-align: center;
      margin-top: -6px;
      margin-left: -15px;
    }
    &:hover {
      cursor: pointer;
      img {
        opacity: 1;
      }
    }
  }
  .btn-close {
    width: max-content;
    height: 68px;
    position: absolute;
    bottom: 25px;
    right: 200px;
    display: flex;
    align-items: center;
    @media (max-width: 570px) {
      right: 100px;
    }
    img {
      object-fit: contain;
      opacity: .2;
      filter: brightness(0) invert(1);
      transition: all .3s;
      max-height: 100%;
      display: block;
      margin-left: 20px;
    }
    .text {
      color: #fff;
      font-size: 16px;
    }
    &:hover {
      img {
        opacity: 1;
        cursor:pointer;
      }
    }
  }
`;

export default class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      btnStyle: {
        transform: 'translateX(0)'
      }
    }
  }

  componentDidMount() {
    const video = document.getElementById('video');
    video.addEventListener("canplay", this.loadingVideo);
  }

  playVideo = () => {
    const video = document.getElementById('video');
    this.setState({btnStyle: {transform: 'translateX(-1000px)', opacity: 0}});
    video.play();
  };

  stopVideo = () => {
    const video = document.getElementById('video');
    video.pause();
    video.currentTime = 0;
    this.setState({btnStyle: {transform: 'translateX(0px)', opacity: 1}});
    this.props.close();
  };

  loadingVideo = () => {

  };


  render() {
    return (
      <VideoWrapper>
        <video
          src={showreel}
          playsInline
          id="video"
        />
        <div
          className="btn-start"
          onClick={this.playVideo}
          style={this.state.btnStyle}
        >
          <img src={btn} alt="start"/>
          <div className="text">Start</div>
        </div>
        <div className="btn-close" onClick={this.stopVideo}>
          <div className="text">skip&nbsp;showreel</div>
          <img src={close} alt="close"/>
        </div>
      </VideoWrapper>
    )
  }
};