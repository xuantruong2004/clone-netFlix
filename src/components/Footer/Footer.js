import React from "react";
import styled from "styled-components";
import {
  AiFillFacebook,
  AiFillYoutube,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";

function Footer(props) {
  return (
    <FooterWrapper>
      <div className="socialMedia">
        <AiFillFacebook className="icon" />
        <AiFillInstagram className="icon" />
        <AiFillYoutube className="icon" />
        <AiFillTwitterCircle className="icon" />
      </div>
      <div>
        <h5>@ 2022. TruongXuan etc-Clone Netflix</h5>
      </div>
    </FooterWrapper>
  );
}

export default Footer;
const FooterWrapper = styled.div`
  width: 100%;
  height: 80px;
  background-color: var(--color-background);

  .socialMedia {
    text-align: center;
    color: #ccc;
    font-size: 26px;
    .icon {
      padding: 0 1px;
      cursor: pointer;
      &:hover {
        color: white;
      }
    }
    .icon + .icon {
      margin-left: 6px;
    }
  }
  h5 {
    text-align: center;
    color: #ccc;
    font-size: 12px;
    font-weight: 400;
  }
`;
