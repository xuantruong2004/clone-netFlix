import React from "react";
import { FaHotjar, FaStar } from "react-icons/fa";
import {
  GiBandageRoll,
  GiGhost,
  GiNinjaHeroicStance,
  GiRomanToga,
} from "react-icons/gi";
import { MdTheaterComedy } from "react-icons/md";
import { RiNetflixFill } from "react-icons/ri";
import styled from "styled-components";
import MenuItem from "./MenuItem";

function Menus(props) {
  return (
    <MenusPane>
      <MenuItem
        className="subMenu"
        name="Home"
        Icon={RiNetflixFill}
        color="red"
        to="netFlix"
      />
      <MenuItem
        className="subMenu"
        name="Trending"
        Icon={FaHotjar}
        color="#FF3333"
        to="trending"
      />
      <MenuItem
        className="subMenu"
        name="Top rated"
        Icon={FaStar}
        color="Yellow"
        to="topRated"
      />
      <MenuItem
        className="subMenu"
        name="Actions Movies"
        Icon={GiNinjaHeroicStance}
        color="#FF3366"
        to="actions"
      />
      <MenuItem
        className="subMenu"
        name="Comedy Movies"
        Icon={MdTheaterComedy}
        color="#00BB00"
        to="comedy"
      />
      <MenuItem
        className="subMenu"
        name="Romance Movies"
        Icon={GiRomanToga}
        color="#FF3399"
        to="romance"
      />
      <MenuItem
        className="subMenu"
        name="Horror Movies"
        Icon={GiGhost}
        color="Silver"
        to="horror"
      />
      <MenuItem
        className="subMenu"
        name="Documentaries"
        Icon={GiBandageRoll}
        color="#003366"
        to="documentaries"
      />
    </MenusPane>
  );
}

export default Menus;

const MenusPane = styled.div`
  position: fixed;
  left: 0;
  top: 20%;
  width: 46px;
  padding: 4px 0;
  background-color: rgba(20, 20, 20, 0.3);
  z-index: 100;
  display: flex;
  flex-direction: column;
  transform-origin: left center;
  transition: all 0.3s linear;
  overflow: hidden;
  border-radius: 4px;

  &:hover {
    width: 200px;
    background-color: rgba(20, 20, 20, 1);
  }
  .subMenu {
    display: flex;
    align-items: center;
    width: max-content;
    margin-left: 2px;
    padding: 4px 6px;
    cursor: pointer;

    .icon {
      font-size: 30px;
      margin-right: 8px;
    }

    span {
      font-size: 18px;
      font-weight: 400;
      color: rgba(225, 225, 225, 0.6);
      &:hover {
        color: #fff;
      }
    }
  }
`;
