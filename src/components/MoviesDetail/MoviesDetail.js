import moment from "moment/moment";
import React from "react";
import { useDispatch } from "react-redux";
import styled, { keyframes } from "styled-components";
import { setMovieDetail } from "../store/actions";
import { MdClose } from "react-icons/md";

function MoviesDetail(props) {
  const { movie, showModal } = props;
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch(setMovieDetail(null));
  };
  return (
    <MoviesDetailModal>
      <div
        className={`backdrop ${showModal ? "showBackdrop" : "hideBackdrop"}`}
        onClick={() => handleCloseModal()}
      ></div>
      <div
        className={`modal ${showModal ? "showModal" : "hideModal"}`}
        style={
          movie
            ? {
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : {}
        }
      >
        <div className="container">
          <div className="movieInfo">
            <h1 className="movieTitle">{movie?.name || movie?.title}</h1>
            <p className="statistical">
              <span className="movieRating">
                Rating: {Math.round(movie?.vote_average * 10)}%
              </span>
              <span className="moviePopularity">
                Popularity: {movie?.popularity}
              </span>
            </p>
            <p className="releaseDate">
              Release date:{" "}
              {moment(movie?.first_air_date).format("DD/MM/YYYY") ||
                moment(movie?.release_date).format("DD/MM/YYYY")}
            </p>
            <p className="runTime">
              Run time: {movie?.runtime || movie?.episode_run_time}{" "}
            </p>
            <p className="overView">{movie?.overview}</p>
          </div>
          <div className="iconClose" onClick={() => handleCloseModal()}>
            <MdClose />
          </div>
        </div>
      </div>
    </MoviesDetailModal>
  );
}

export default MoviesDetail;

const fadeIn = keyframes`
0%: {background:rgba(0,0,0,0)}
100%: {background:rgba(0,0,0,0.6)}
`;

const MoviesDetailModal = styled.div`
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.6);
    animation: ${fadeIn} 1s cubic-bezier(0.17, 0.85, 0.45, 1) forwards;
  }

  .showBackdrop {
    display: block;
  }

  .hideBackdrop {
    display: none;
  }

  .modal {
    position: fixed;
    top: 25%;
    left: 0;
    z-index: 300;
    width: 100%;
    height: 60%;
    margin: 0 auto;
    color: var(--color-white);
    box-shadow: 0 15px 40px rgba(var(--color-dark), 0.2);
    transition: all 0.3s ease;

    @media screen and (max-width: 1184px) {
      height: 70%;
    }
    @media screen and (max-width: 600px) {
      height: 80%;
    }

    .container {
      position: relative;
      width: 70%;
      height: 100%;
      background: linear-gradient(90deg, rgba(0, 0, 0, 0.94), 60%, transparent);

      @media screen and (max-width: 1184px) {
        background: linear-gradient(
          90deg,
          rgba(0, 0, 0, 0.94),
          40%,
          rgba(0, 0, 0, 0.773),
          transparent
        );
      }
      @media screen and (max-width: 980px) {
        background: linear-gradient(
          90deg,
          rgba(0, 0, 0, 0.94),
          50%,
          rgba(0, 0, 0, 0.773),
          transparent
        );
      }
      @media screen and (max-width: 688px) {
        background: linear-gradient(
          90deg,
          rgba(0, 0, 0, 0.94),
          60%,
          rgba(0, 0, 0, 0.773),
          transparent
        );
        width: 100%;
      }
      .movieInfo {
        padding: 30px 0 0 24px;
        color: var(--color-white);
        font-size: 18px;

        @media screen and (max-width: 600px) {
          font-size: 16px;
        }

        .movieTitle {
          margin-top: 30px;
        }

        .statistical {
          margin-top: 20px;
          display: flex;

          .movieRating {
            color: var(--color-green);
          }

          .moviePopularity {
            color: yellow;
            margin-left: 12px;
          }
        }

        .releaseDate,
        .runTime {
          margin-top: 12px;
        }

        .overView {
          margin-top: 20px;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.4;
          font-size: 18px;

          @media screen and (max-width: 688px) {
            font-size: 14px;
          }
        }
      }

      .iconClose {
        position: absolute;
        top: 12px;
        left: 16px;
        font-size: 26px;
        color: #ccc;
        cursor: pointer;
        padding: 4px;

        &:hover {
          color: white;
        }
      }
    }
  }

  .showModal {
    top: 25%;
    opacity: 1;
    left: 1;
    visibility: visible;
    transition: 0.5s ease-in-out;
  }

  .hideModal {
    top: 0;
    opacity: 0;
    visibility: hidden;
    transition: 0.5s ease-in-out;
  }
`;
