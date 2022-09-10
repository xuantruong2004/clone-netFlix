import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useViewport } from "../../hooks";
import { setMovieDetail } from "../store/actions";

function MoviesRowId(props) {
  const { ListMovies } = props;
  const [windowWidth] = useViewport();
  const dispatch = useDispatch();

  return (
    <SearchPane>
      <div
        className="searchList"
        style={{
          gridTemplateColumns: `repeat(${
            windowWidth > 1200
              ? 5
              : windowWidth > 992
              ? 4
              : windowWidth > 768
              ? 3
              : windowWidth > 600
              ? 2
              : 1
          },auto)`,
        }}
      >
        {ListMovies.map((movie, index) => (
          <div
            key={movie.id}
            className="searchItem"
            onClick={() => {
              dispatch(setMovieDetail(movie));
              console.log("click movie");
            }}
          >
            <img
              src={
                `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` ||
                `https://image.tmdb.org/t/p/original/${movie.poster_path}`
              }
              alt={movie.name}
            />
            <span>{movie.name || movie.title}</span>
          </div>
        ))}
      </div>
    </SearchPane>
  );
}

export default MoviesRowId;

const SearchPane = styled.div`
  width: 100%;
  min-height: 92vh;
  padding-top: 30px;
  background: var(--color-background);
  transition: all 0.3s linear;

  .searchList {
    padding: 0px 60px;
    display: grid;
    gap: 20px;

    @media screen and (max-width: 992px) {
      padding: 0px;
    }

    &:hover .searchItem {
      opacity: 0.7;
    }

    .searchItem {
      position: relative;
      max-width: 400px;
      height: 240px;
      border-radius: 12px;
      margin: 20px 0;
      overflow: hidden;
      transform: scale(1);
      transition: all 0.3s linear;

      &:hover {
        opacity: 1;
        transform: scale(1.2);
        z-index: 10;
        cursor: pointer;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      span {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        text-align: center;
        padding: 4px;
        background: rgba(0, 0, 0, 0.5);
        color: var(--color-white);
      }
    }
  }

  .searchNotfound {
    padding-left: 100px;
    padding-top: 50px;
    font-size: 12px;
    color: var(--color-white);
  }
`;
