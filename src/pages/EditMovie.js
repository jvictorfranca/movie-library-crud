import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: undefined,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getMovieArray = this.getMovieArray.bind(this);
  }

  componentDidMount() {
    this.getMovieArray();
  }

  handleSubmit(updatedMovie) {
    const movie = updatedMovie;
    this.setState(() => ({
      movie,
    }), () => {
      const { history, match } = this.props;
      const { params } = match;
      const { id } = params;
      movieAPI.updateMovie(movie).then(
        history.push(`/movies/${id}`),
      );
    });
  }

  async getMovieArray() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    const movie = await movieAPI.getMovie(id);
    this.setState({
      movie,
    });
  }

  render() {
    const { movie } = this.state;

    return (
      <div data-testid="edit-movie">

        {movie
          ? <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
          : <Loading /> }

      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default EditMovie;
