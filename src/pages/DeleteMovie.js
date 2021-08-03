import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { Redirect, Switch } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';

class DeleteMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    movieAPI.deleteMovie(id);
  }

  render() {
    return (
      <Switch>
        <Redirect to="/" />
      </Switch>
    );
  }
}

DeleteMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default DeleteMovie;
