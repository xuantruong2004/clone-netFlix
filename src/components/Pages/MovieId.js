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
          width="60%"
          height="500"
          scrolling="no"
          frameborder="0"
          src={`https://2embed.org/embed/${idVideo}`}
          allowfullscreen="true"
          // webkitallowfullscreen="true"
          // mozallowfullscreen="true"
          title="Iframe Example"
        ></iframe>
      </div>
    </MovieWatching>
  );
}

export default MovieId;

const MovieWatching = styled.div`
  padding: 100px 50px;
  background-color: var(--color-background);

  .MovieVideo {
  }
`;
