import * as Types from "../types";
const reducerMoviesInitialState = {
  NetflixOriginals: null,
  TrendingMovies: null,
  TopRateMovies: null,
  ActionsMovies: null,
  ComedyMovies: null,
  HorrorMovies: null,
  RomanceMovies: null,
  DocumentariesMovies: null,
  MovieDetail: null,
  SearchMovies: null,
};
const reducerMovies = (state = reducerMoviesInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case Types.GET_NETFLIX_ORIGINALS:
      return { ...state, NetflixOriginals: payload };
    case Types.GET_TRENDING_MOVIES:
      return { ...state, TrendingMovies: payload };
    case Types.GET_TOP_RATE_MOVIES:
      return { ...state, TopRateMovies: payload };
    case Types.GET_ACTIONS_MOVIES:
      return { ...state, ActionsMovies: payload };
    case Types.GET_COMEDY_MOVIES:
      return { ...state, ComedyMovies: payload };
    case Types.GET_HORROR_MOVIES:
      return { ...state, HorrorMovies: payload };
    case Types.GET_ROMANCE_MOVIES:
      return { ...state, RomanceMovies: payload };
    case Types.GET_DOCUMENTARIES_MOVIES:
      return { ...state, DocumentariesMovies: payload };
    case Types.SET_MOVIE_DETAIL:
      return { ...state, MovieDetail: payload };
    case Types.GET_SEARCH_MOVIES:
      return { ...state, SearchMovies: payload };
    default:
      return state;
  }
};

export default reducerMovies;
