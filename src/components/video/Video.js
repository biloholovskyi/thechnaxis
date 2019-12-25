import React, {Component} from "react";
import styled, {keyframes}from "styled-components";

import btn from './btn.gif';
import close from './close.svg';
import noise from './noise.png';

const showreel = 'https://technaxis.com/showreel.mp4';

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

const NoiseAnimation = keyframes`
  0%, 100% {
        background-position: 0 0;
    }

    10% {
        background-position: -5% -10%;
    }

    20% {
        background-position: -15% 5%;
    }

    30% {
        background-position: 7% -25%;
    }

    40% {
        background-position: 20% 25%;
    }

    50% {
        background-position: -25% 10%;
    }

    60% {
        background-position: 15% 5%;
    }

    70% {
        background-position: 0% 15%;
    }

    80% {
        background-position: 25% 35%;
    }

    90% {
        background-position: -10% 10%;
    }
`;

const BarAnimation = keyframes`
  0% {
        height: 60%;
    }
    4% {
        height: 50%;
    }
    8% {
        height: 40%;
    }
    12% {
        height: 30%;
    }
    16% {
        height: 20%;
    }
    20% {
        height: 30%;
    }
    24% {
        height: 40%;
    }
    28% {
        height: 10%;
    }
    32% {
        height: 40%;
    }
    36% {
        height: 60%;
    }
    40% {
        height: 20%;
    }
    44% {
        height: 40%;
    }
    48% {
        height: 70%;
    }
    52% {
        height: 30%;
    }
    56% {
        height: 10%;
    }
    60% {
        height: 30%;
    }
    64% {
        height: 50%;
    }
    68% {
        height: 60%;
    }
    72% {
        height: 70%;
    }
    76% {
        height: 80%;
    }
    80% {
        height: 70%;
    }
    84% {
        height: 60%;
    }
    88% {
        height: 50%;
    }
    92% {
        height: 60%;
    }
    96% {
        height: 70%;
    }
    100% {
        height: 80%;
    }
`;

const Noise = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${noise});
  z-index: 1000000;
  animation: 1s infinite ${NoiseAnimation};
  display: ${props => props.playing ? 'none' : 'flex'};
  align-items: center;
  justify-content: center;
`;

const Prelouder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .3s;
  opacity: ${props => props.loaded ? 0 : 1};
  .bar-box {
    margin-right: 15px;
    display: flex;
    height: 20px;
    .bar {
      width: 2px;
      background-color: #fff;
      animation: ${BarAnimation} 4s 0s infinite;
      &:nth-child(1) {
       animation-delay: -1.9s;
      }
      &:nth-child(2) {
        animation-delay: -2s;
        margin: 0 3px;
      }
      &:nth-child(3) {
        animation-delay: -2.3s;
      }
    }
  }
  .text {
    font-size: 16px;
    color: #FFF;
    transition: all .3s;
  }
`;

export default class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      playing: false,
      btnStyle: {
        transform: 'translateX(0)'
      }
    }
  }

  componentDidMount() {
    const video = document.getElementById('video');
    video.addEventListener("canplaythrough", this.loadingVideo);
  }

  playVideo = () => {
    const video = document.getElementById('video');
    this.setState({
      btnStyle: {transform: 'translateX(-1000px)', opacity: 0},
      playing: true
    });
    video.play();
  };

  stopVideo = () => {
    const video = document.getElementById('video');
    video.pause();
    video.currentTime = 0;
    this.setState({
      btnStyle: {transform: 'translateX(0px)', opacity: 1},
      playing: false
    });
    this.props.close();
  };

  loadingVideo = () => {
    setTimeout(() => {
      this.setState({loaded: true});
    }, 1000);
  };


  render() {
    const {loaded, playing} = this.state;
    const start = loaded ? (
      <div
        className="btn-start"
        onClick={this.playVideo}
        style={this.state.btnStyle}
      >
        <img src={btn} alt="start"/>
        <div className="text">Start</div>
      </div>
    ) : false;
    return (
      <VideoWrapper>
        <Noise playing={playing}>
          <Prelouder loaded={loaded}>
            <div className="bar-box">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            <div className="text">Here will be sound</div>
          </Prelouder>
        </Noise>
        <video
          src={showreel}
          playsInline
          id="video"
        />
        {start}
        <div className="btn-close" onClick={this.stopVideo}>
          <div className="text">skip&nbsp;showreel</div>
          <img src={close} alt="close"/>
        </div>
      </VideoWrapper>
    )
  }
};