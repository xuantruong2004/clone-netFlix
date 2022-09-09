import React, { useEffect, useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
import styled from "styled-components";
import NetFlixLogo from "../../assets/images/netflix-logo-rgb.png";
import { useScrollY } from "../../hooks";
import { useNavigate } from "react-router-dom";
import useDebounce from "../../hooks/useDebounce";
Navbar.propTypes = {};

function Navbar(props) {
  const [scrollY] = useScrollY();

  const [keywords, setKeywords] = useState("");
  const navigate = useNavigate();

  const debounce = useDebounce(keywords, 500);
  useEffect(() => {
    keywords.length > 0
      ? navigate(`/search?keywords=${keywords.trim()}`)
      : navigate("/");
  }, [debounce]);
  const handleChangeInput = (e) => {
    let keywords = e.target.value;
    setKeywords(keywords);
  };

  const goHome = () => {
    navigate("/");
    setKeywords("");
  };
  return (
    <Navigation
      style={
        scrollY < 50
          ? { backgroundColor: "transparent" }
          : { backgroundColor: "var(--color-background)" }
      }
    >
      <div className="navContainer">
        <div className="logo" onClick={goHome}>
          <img src={NetFlixLogo} alt="" width="100%" />
        </div>
        <div className="navSearch">
          <MdOutlineSearch className="iconSearch" />
          <input
            type="text"
            placeholder="input title, genres, people"
            onChange={handleChangeInput}
            value={keywords}
          />
        </div>
      </div>
    </Navigation>
  );
}

export default Navbar;
const Navigation = styled.div`
  width: 100%;
  height: 80px;
  padding: 0 20px;
  position: fixed;
  top: 0;
  transition-timing-function: ease-in;
  transition: all 1s;
  z-index: 100;
  @media only screen and (max-width: 600px) {
    height: 60px;
  }

  .navContainer {
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100%;

    @media only screen and (max-width: 600px) {
      // flex-direction: column;
    }

    .logo {
      width: 120px;
      cursor: pointer;
    }

    .navSearch {
      color: var(--color-white);
      padding-right: 20px;
      display: flex;
      justify-content: flex-end;

      &:hover .iconSearch {
        color: var(--color-white);
      }

      .iconSearch {
        width: 22px;
        height: 22px;
        cursor: pointer;
        color: #bbb;
        transform: translateX(26px) translateY(10px);
      }
      input {
        font-size: 14px;
        padding: 10px;
        border: solid 1px #fff;
        color: var(--color-white);
        outline: none;
        width: 0;
        cursor: pointer;
        opacity: 0;
        background-color: transparent;
        transition: width 0.5s;

        &:focus {
          padding-left: 28px;
          width: 300px;
          cursor: text;
          opacity: 1;
          border-radius: 4px;
        }
      }
    }
  }
`;
