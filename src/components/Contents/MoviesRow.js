import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import { SmoothHorizontalScrolling } from "../../utils";
import { useViewport } from "../../hooks";
import { useDispatch } from "react-redux";
import { setMovieDetail } from "../store/actions";
function MoviesRow(props) {
  const { movieList, title, isNetFlix, idSection } = props;
  const [dragDown, setDragDown] = useState(0);
  const [dragMove, setDragMove] = useState(0);
  const [isDrag, setIsDrag] = useState(false);
  const sliderRef = useRef();
  const movieRef = useRef();
  const [windowWidth] = useViewport();

  const handleClickRight = () => {
    const maxScrollLeft =
      sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
    if (sliderRef.current.scrollLeft < maxScrollLeft) {
      SmoothHorizontalScrolling(
        sliderRef.current,
        250,
        movieRef.current.clientWidth * 2,
        sliderRef.current.scrollLeft
      );
    }
  };
  const handleClickLeft = () => {
    if (sliderRef.current.scrollLeft > 0) {
      SmoothHorizontalScrolling(
        sliderRef.current,
        250,
        -movieRef.current.clientWidth * 2,
        sliderRef.current.scrollLeft
      );
    }
  };

  useEffect(() => {
    if (isDrag) {
      if (dragMove < dragDown) handleClickRight();
      if (dragMove > dragDown) handleClickLeft();
    }
  }, [dragDown, dragMove, isDrag]);

  const onDragStart = (e) => {
    setIsDrag(true);
    setDragDown(e.screenX);
  };
  const onDragEnd = (e) => {
    setIsDrag(false);
  };
  const onDragEnter = (e) => {
    setDragMove(e.screenX);
  };

  const dispatch = useDispatch();
  const handleSetMovie = (movie) => {
    dispatch(setMovieDetail(movie));
  };
  return (
    <MovieRowContainer draggable="false" id={idSection}>
      <h1 className="heading">{title}</h1>
      <MovieSlider
        ref={sliderRef}
        draggable="true"
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragEnter={onDragEnter}
        style={
          movieList && movieList.length > 0
            ? {
                gridTemplateColumns: `repeat(${movieList.length},
                ${
                  windowWidth > 1200
                    ? "360px"
                    : windowWidth > 992
                    ? "220px"
                    : windowWidth > 768
                    ? "160px"
                    : "120px"
                }              
              )`,
              }
            : {}
        }
      >
        {movieList &&
          movieList.length &&
          movieList.map((movie) => {
            if (movie.poster_path && movie.backdrop_path !== null) {
              let imageUrl = isNetFlix
                ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                : `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
              return (
                <div
                  key={movie.id}
                  className="movieItem"
                  ref={movieRef}
                  draggable="false"
                  onClick={() => handleSetMovie(movie)}
                >
                  <img
                    src={imageUrl}
                    alt={movie.name || movie.title}
                    draggable="false"
                  />
                  <div className="movieName">{movie.name || movie.title}</div>
                </div>
              );
            }
          })}
      </MovieSlider>
      <div
        disabled
        className={`btnLeft ${isNetFlix && "isNetFlix"}`}
        onClick={handleClickLeft}
      >
        <BsChevronLeft className="iconLeft" />
      </div>
      <div
        className={`btnRight ${isNetFlix && "isNetFlix"}`}
        onClick={handleClickRight}
      >
        <BsChevronRight className="iconRight" />
      </div>
    </MovieRowContainer>
  );
}

export default MoviesRow;

const MovieRowContainer = styled.div`
  background-color: var(--color-background);
  color: var(--color-white);
  padding: 20px 20px 0;
  position: relative;
  width: 100%;
  height: 100%;

  .heading {
    font-size: 18px;
    user-select: none;
  }

  .btnLeft {
    position: absolute;
    top: 50%;
    left: 30px;
    transform: translateY(-20%);
    width: 34px;
    height: 50px;
    background-color: rgb(0, 0, 0, 0.5);
    z-index: 20;
    transform-origin: center;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
      background-color: rgb(0, 0, 0, 0.8);
    }

    &:hover svg {
      opacity: 1;
      transform: translateX(-10%) scale(1.2);
    }

    svg {
      font-size: 30px;
      transform: translateX(-10%);
      opacity: 0.6;
      transition: all 0.3s linear;
    }

    &.isNetFlix {
      width: 40px;
      height: 100px;
    }
  }

  .btnRight {
    position: absolute;
    top: 50%;
    right: 30px;
    transform: translateY(-20%);
    width: 34px;
    height: 50px;
    background-color: rgb(0, 0, 0, 0.5);
    z-index: 20;
    transform-origin: center;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
      background-color: rgb(0, 0, 0, 0.8);
    }

    &:hover svg {
      opacity: 1;
      transform: translateX(10%) scale(1.2);
    }

    svg {
      font-size: 30px;
      transform: translateX(10%);
      opacity: 0.6;
      transition: all 0.3s linear;
    }

    &.isNetFlix {
      width: 40px;
      height: 100px;
    }
  }
`;

const MovieSlider = styled.div`
  display: grid;
  gap: 6px;
  transition: all 0.3s linear;
  user-select: none;
  overflow-y: hidden;
  overflow-x: auto;
  overflow: hidden;
  padding: 20px 0;
  scroll-behavior: smooth;

  &:hover .movieItem {
    opacity: 0.6;
  }

  .movieItem {
    transform: scale(1);
    max-width: 360px;
    max-height: 500px;
    width: 100%;
    height: 100%;
    transition: all 0.3s linear;
    user-select: none;
    overflow: hidden;
    border-radius: 6px;
    transform: center left;
    position: relative;

    &:hover {
      cursor: pointer;
      transform: scale(1.1);
      z-index: 10;
      opacity: 1;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .movieName {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    padding: 4px 0;
    background-color: rgb(15, 15, 15, 0.5);
  }
`;
