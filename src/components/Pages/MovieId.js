import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const useQuery = () => new URLSearchParams(useLocation().search);
function MovieId(props) {
  const idVideo = useQuery().get("id");
  console.log(idVideo);
  return (
    <MovieWatching>
      <div className="MovieVideo">
        <iframe
          width="100%"
          height="800px"
          src={`https://2embed.org/embed/${idVideo}`}
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
`;
