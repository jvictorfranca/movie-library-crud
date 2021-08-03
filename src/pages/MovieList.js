import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';

import '../App.css';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: ['no-movies'],
    };
    this.getMoviesArray = this.getMoviesArray.bind(this);
    this.handleData = this.handleData.bind(this);
  }

  componentDidMount() {
    this.getMoviesArray();
  }

  handleData = (event) => {
    const { name } = event.target;
    const value = event.target.type === 'checkbox'
      ? event.target.checked
      : event.target.value;

    this.setState(({
      [name]: value,
    }));
  }

  async getMoviesArray() {
    const movies = await movieAPI.getMovies();
    this.setState({
      movies,
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    });
  }

  filterBookmarked = (array) => {
    const { state } = this;
    const bool = state.bookmarkedOnly;
    let answer = array;
    if (bool) { answer = array.filter((movie) => movie.bookmarked === true); }
    return answer;
  }

  filterGenre = (array) => {
    const { state } = this;
    const genre = state.selectedGenre;
    let answer = array;
    if (genre !== '') { answer = array.filter((movie) => movie.genre === genre); }
    return answer;
  }

  filterSearchText = (array) => {
    const { state } = this;
    const search = state.searchText;
    let answer = array;
    if (search !== '') {
      answer = array.filter((movie) => {
        const fullText = `${movie.title} ${movie.subtitle} ${movie.storyline}`;
        return fullText.includes(search);
      });
    }
    return answer;
  }

  render() {
    let { movies } = this.state;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    movies = this.filterBookmarked(movies);
    movies = this.filterGenre(movies);
    movies = this.filterSearchText(movies);

    // Render Loading here if the request is still happening

    return (
      <div className="movie-list" data-testid="movie-list">
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleData }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleData }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleData }
        />
        {movies[0] === 'no-movies'
          ? <Loading />
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
