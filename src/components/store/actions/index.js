import axios from "axios";
import * as Types from "../types";

const API_KEY = "97cfcf56efda1a3bf1923b8793630b7b";
const BASE_URL = "https://api.themoviedb.org/3";
export const getNetflixOriginals = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/tv?api_key=${API_KEY}`
    );
    dispatch({
      type: Types.GET_NETFLIX_ORIGINALS,
      payload: result.data.results,
    });
  } catch (error) {
    console.log("Get Fail API NetFlix", error);
  }
};

export const getTrendingMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/trending/all/week?api_key=${API_KEY}`
    );
    dispatch({
      type: Types.GET_TRENDING_MOVIES,
      payload: result.data.results,
    });
  } catch (error) {
    console.log("Get Fail API Trending Movies", error);
  }
};
export const getTopRateMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`
    );
    dispatch({
      type: Types.GET_TOP_RATE_MOVIES,
      payload: result.data.results,
    });
  } catch (error) {
    console.log("Get Fail API Top rate movies", error);
  }
};
export const getActionsMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`
    );
    dispatch({
      type: Types.GET_ACTIONS_MOVIES,
      payload: result.data.results,
    });
  } catch (error) {
    console.log("Get Fail API Actions movies", error);
  }
};
export const getComedyMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`
    );
    dispatch({
      type: Types.GET_COMEDY_MOVIES,
      payload: result.data.results,
    });
  } catch (error) {
    console.log("Get Fail API Comedy movies", error);
  }
};
export const getHorrorMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`
    );
    dispatch({
      type: Types.GET_HORROR_MOVIES,
      payload: result.data.results,
    });
  } catch (error) {
    console.log("Get Fail API Horror movies", error);
  }
};
export const getRomanceMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`
    );
    dispatch({
      type: Types.GET_ROMANCE_MOVIES,
      payload: result.data.results,
    });
  } catch (error) {
    console.log("Get Fail API Romance movies", error);
  }
};
export const getDocumentaries = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`
    );
    dispatch({
      type: Types.GET_DOCUMENTARIES_MOVIES,
      payload: result.data.results,
    });
  } catch (error) {
    console.log("Get Fail API Documentaries movies", error);
  }
};

export const setMovieDetail = (movie) => (dispatch) => {
  dispatch({ type: Types.SET_MOVIE_DETAIL, payload: movie });
};

export const getSearchMovies = (keywords) => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/search/multi?api_key=${API_KEY}&language=en-US&include_adult=false&query=${keywords}`
    );
    dispatch({
      type: Types.GET_SEARCH_MOVIES,
      payload: result.data.results,
    });
  } catch (error) {
    console.log("Get Fail API Search movies", error);
  }
};

export const getPopularityMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}`
    );
    dispatch({
      type: Types.GET_POPULARITY_MOVIES,
      payload: result.data.results,
    });
  } catch (error) {
    console.log("Get Fail API Popularity movies", error);
  }
};
