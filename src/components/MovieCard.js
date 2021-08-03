import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import '../App.css';

class MovieCard extends React.Component {
  render() {
    const { props } = this;
    const { title, subtitle, storyline, imagePath, rating, id } = props.movie;
    return (
      <div className="movie-card movie-card-body" data-testid="movie-card">
        <h4 className="movie-card-title" data-testid="movie-card-title">{title}</h4>
        <h5 className="movie-card-subtitle">{subtitle}</h5>
        <p className="movie-card-storyline">{storyline}</p>
        <img src={ imagePath } alt="" className="movie-card-image" />
        <Link to={ `/movies/${id}` } className="link-button"> More info </Link>
        <Rating rating={ rating } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.string,
    id: PropTypes.number,

  }).isRequired,
};

export default MovieCard;
