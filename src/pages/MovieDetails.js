import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import Details from '../components/Details';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: undefined,
    };
    this.getMovieArray = this.getMovieArray.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    this.getMovieArray();
  }

  async getMovieArray() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    console.log(id);
    const movie = await movieAPI.getMovie(id);
    this.setState({
      movie,
    });
  }

  deleteMovie() {
    const { match, history } = this.props;
    const { params } = match;
    const { id } = params;
    movieAPI.deleteMovie(id).then(history.push('/'));
  }

  render() {
    const { movie } = this.state;

    return (
      <div>
        {movie === undefined
          ? <Loading />
          : <Details movie={ movie } />}
        {/* <Link to="/" onClick={ this.deleteMovie }>DELETAR</Link> */}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({

    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  history: PropTypes.shape({

    push: PropTypes.shape({
    }),
  }).isRequired,
};

export default MovieDetails;
