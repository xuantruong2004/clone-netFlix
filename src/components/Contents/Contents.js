import React, { useEffect } from "react";
import MoviesRow from "./MoviesRow";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { useScrollY } from "../../hooks";

import { useDispatch, useSelector } from "react-redux";
import {
  getActionsMovies,
  getComedyMovies,
  getDocumentaries,
  getHorrorMovies,
  getNetflixOriginals,
  getRomanceMovies,
  getTopRateMovies,
  getTrendingMovies,
  getPopularityMovies,
} from "../store/actions";
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";

function Contents(props) {
  const ScrollGoToTop = () => {
    scroll.scrollToTop();
  };
  const [scrollY] = useScrollY();

  const dispatch = useDispatch();
  const {
    NetflixOriginals,
    TrendingMovies,
    TopRateMovies,
    ActionsMovies,
    ComedyMovies,
    HorrorMovies,
    RomanceMovies,
    DocumentariesMovies,
  } = useSelector((state) => state.infoMovies);
  useEffect(() => {
    dispatch(getNetflixOriginals());
    dispatch(getTrendingMovies());
    dispatch(getTopRateMovies());
    dispatch(getActionsMovies());
    dispatch(getComedyMovies());
    dispatch(getHorrorMovies());
    dispatch(getRomanceMovies());
    dispatch(getDocumentaries());
    dispatch(getPopularityMovies());
  }, [dispatch]);

  return (
    <div>
      <MoviesRow
        movieList={NetflixOriginals}
        title="NetFlix originals"
        isNetFlix={true}
        idSection="netFlix"
      />
      <MoviesRow
        movieList={TrendingMovies}
        title="Trending Movies"
        idSection="trending"
      />
      <MoviesRow
        movieList={TopRateMovies}
        title="Top rated Movies"
        idSection="topRated"
      />
      <MoviesRow
        movieList={ActionsMovies}
        title="Actions Movies"
        idSection="actions"
      />
      <MoviesRow
        movieList={ComedyMovies}
        title="Comedy Movies"
        idSection="comedy"
      />
      <MoviesRow
        movieList={RomanceMovies}
        title="Romance Movies"
        idSection="romance"
      />
      <MoviesRow
        movieList={HorrorMovies}
        title="Horror Movies"
        idSection="horror"
      />
      <MoviesRow
        movieList={DocumentariesMovies}
        title="Documentaries Movies"
        idSection="documentaries"
      />
      <GoToTop
        onClick={() => ScrollGoToTop()}
        style={{
          visibility: `${scrollY > 600 ? "visible" : "hidden"}`,
        }}
      >
        <FaArrowAltCircleUp className="iconCircleUp" />
      </GoToTop>
    </div>
  );
}

export default Contents;

const GoToTop = styled.div`
  position: fixed;
  z-index: 10;
  right: 70px;
  bottom: 50px;
  cursor: pointer;
  font-size: 50px;
  color: rgba(225, 225, 225, 0.4);
  transition: all 0.3s linear;

  &:hover {
    color: rgba(225, 225, 225, 0.8);
  }
`;
