import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const useQuery = () => new URLSearchParams(useLocation().search);
function MovieId(props) {
  const idVideo = useQuery().get("id");
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
    </MovieWatching>
  );
}

export default MovieId;

const MovieWatching = styled.div`
  padding: 100px 50px;
  background-color: var(--color-background);
  height: 100vh;
  display: flex;
  align-items: center;
  .MovieVideo {
    width: 60%;
    height: 500px;
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
`;
