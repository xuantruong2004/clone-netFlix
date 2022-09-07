import React from "react";
import { useSelector } from "react-redux";
import MoviesDetail from "../MoviesDetail/MoviesDetail";
import SearchMovies from "../SearchMovies/SearchMovies";

function Search(props) {
  const { MovieDetail } = useSelector((state) => state.infoMovies);
  return (
    <div>
      <SearchMovies />
      <MoviesDetail
        showModal={MovieDetail ? true : false}
        movie={MovieDetail}
      />
    </div>
  );
}

export default Search;
