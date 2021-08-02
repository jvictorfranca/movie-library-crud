import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
    this.getMoviesArray = this.getMoviesArray.bind(this);
  }

  componentDidMount() {
    this.getMoviesArray();
  }

  async getMoviesArray() {
    const movies = await movieAPI.getMovies();
    this.setState({
      movies,
    });
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div className="movie-list" data-testid="movie-list">
        {movies.length === 0
          ? <Loading />
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
