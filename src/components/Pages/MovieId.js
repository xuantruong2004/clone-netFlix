import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import MoviesRowId from "../Contents/MoviesRowId";
import MoviesDetail from "../MoviesDetail/MoviesDetail";

const useQuery = () => new URLSearchParams(useLocation().search);
function MovieId(props) {
  const idVideo = useQuery().get("id");
  const { PopularityMovies } = useSelector((state) => state.infoMovies);

  console.log(PopularityMovies);

  const { MovieDetail } = useSelector((state) => state.infoMovies);

  return (
    <MovieWatching>
      <div className="MovieVideo">
        <iframe
          width="100%"
          height="100%"
          scrolling="no"
          frameborder="0"
          src={`https://2embed.org/embed/${idVideo}`}
          allowfullscreen="true"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          title="Iframe Example"
        ></iframe>
        <p>Please choose another server if the server is down</p>
      </div>
      <div className="MoviePopularity">
        <p>Movies Popularity</p>
        <MoviesRowId ListMovies={PopularityMovies} />
      </div>
      <MoviesDetail
        showModal={MovieDetail ? true : false}
        movie={MovieDetail}
      />
    </MovieWatching>
  );
}

export default MovieId;

const MovieWatching = styled.div`
  padding: 100px 50px 40px;
  background-color: var(--color-background);
  color: var(--color-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .MovieVideo {
    width: 70%;
    height: 600px;
    @media screen and (max-width: 1200px) {
      width: 80%;
    }
    @media screen and (max-width: 969px) {
      width: 100%;
    }
    @media screen and (max-width: 600px) {
      width: 100%;
      height: 300px;
    }
    p {
      margin-top: 10px;
      color: var(--color-white);
    }
  }

  .MoviePopularity {
    width: 100%;
    margin-top: 100px;

    p {
      text-align: center;
      font-size: 30px;
    }
  }
`;
