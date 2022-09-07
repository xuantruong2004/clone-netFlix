import { useState } from "react";
import { VscMute, VscUnmute } from "react-icons/vsc";
import ReactPlayer from "react-player";
import styled from "styled-components";

Intro.propTypes = {};

function Intro(props) {
  const [isMute, setIsMute] = useState(true);

  return (
    <IntroContainer>
      <ReactPlayer
        className="videoIntro"
        playing={true}
        loop={true}
        width="100%"
        height="100%"
        muted={isMute}
        volume={0.5}
        url="https://vimeo.com/389619782"
      />

      <div className="infoIntro">
        <h2 className="headingIntro">title</h2>
        <p className="overviewIntro">
          Netflix "bất thình lình" hiện toàn tiếng Việt, nhưng vẫn không hú hồn
          bằng đọc tựa phim sau khi được Việt hóa
        </p>
      </div>
      {isMute && (
        <VscMute className="btnVolumn" onClick={() => setIsMute(!isMute)} />
      )}
      {!isMute && (
        <VscUnmute className="btnVolumn" onClick={() => setIsMute(!isMute)} />
      )}
      <div className="fadeBottom"></div>
    </IntroContainer>
  );
}

export default Intro;

const IntroContainer = styled.div`
  background-color: var(--color-background);
  color: var(--color-white);
  position: relative;
  padding-top: 56%;

  .videoIntro {
    position: absolute;
    top: 0;
    left: 0;
  }

  .infoIntro {
    position: absolute;
    top: 140px;
    left: 30px;

    @media screen and (max-width: 800px) {
      top: 120px;
      left: 25px;
    }
    @media screen and (max-width: 600px) {
      top: 110px;
      left: 15px;
    }

    .headingIntro {
      font-size: 60px;
      transition: all 0.3s ease;

      @media screen and (max-width: 800px) {
        font-size: 40px;
      }
      @media screen and (max-width: 600px) {
        font-size: 25px;
      }
    }

    .overviewIntro {
      max-width: 550px;
      width: 100%;
      padding-top: 25px;
      line-height: 1.3;
      font-size: 18px;

      @media screen and (max-width: 800px) {
        font-size: 16px;
      }
      @media screen and (max-width: 600px) {
        font-size: 16px;
      }
    }
  }
  .btnVolumn {
    position: absolute;
    top: 50%;
    right: 10%;
    width: 40px;
    height: 40px;
    padding: 5px;
    cursor: pointer;
    border: solid 1px #bbb;
    border-radius: 50%;
    transition: all 0.3s ease;
    transform: scale(1);

    &:hover {
      transform: scale(1.3);
      color: #fff;
      background-color: rgb(225, 225, 225, 0.1);
    }
    @media screen and (max-width: 800px) {
      width: 30px;
      height: 30px;
    }
    @media screen and (max-width: 600px) {
      width: 20px;
      height: 20px;
    }
  }
  .fadeBottom {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    background-image: linear-gradient(
      180deg,
      transparent,
      rgba(15, 15, 15, 0.6) 40%,
      rgb(17, 17, 17),
      rgb(17, 17, 17)
    );
  }
`;
