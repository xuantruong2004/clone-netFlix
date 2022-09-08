import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useViewport } from "../../hooks";
import { useLocation } from "react-router-dom";
import { getSearchMovies, setMovieDetail } from "../store/actions";

const useQuery = () => new URLSearchParams(useLocation().search);
function SearchMovies(props) {
  const [windowWidth] = useViewport();
  const dispatch = useDispatch();
  const { SearchMovies } = useSelector((state) => state.infoMovies);
  const keywords = useQuery().get("keywords");

  useEffect(() => {
    if (keywords) {
      dispatch(getSearchMovies(keywords));
    }
  }, [keywords, dispatch]);
  return (
    <SearchPane>
      {SearchMovies && SearchMovies.length > 0 ? (
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
          {SearchMovies.map((movie, index) => (
            <div
              key={movie.id}
              className="searchItem"
              onClick={() => dispatch(setMovieDetail(movie))}
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
      ) : (
        <div className="searchNotfound">
          <h2>{`Your search for '${keywords}' did not have any matches`}</h2>
        </div>
      )}
    </SearchPane>
  );
}

export default SearchMovies;

const SearchPane = styled.div`
  width: 100%;
  min-height: 92vh;
  padding-top: 80px;
  background: var(--color-background);
  transition: all 0.3s linear;

  .searchList {
    padding: 40px 60px;
    display: grid;
    gap: 8px;

    &:hover .searchItem {
      opacity: 0.7;
    }

    .searchItem {
      position: relative;
      max-width: 400px;
      height: 200px;
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
