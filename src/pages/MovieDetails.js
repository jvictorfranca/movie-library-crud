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
    console.log(this);
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

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie } = this.state;
    console.log(movie);

    return (
      <div>
        {movie === undefined
          ? <Loading />
          : <Details movie={ movie } />}
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
};

export default MovieDetails;
