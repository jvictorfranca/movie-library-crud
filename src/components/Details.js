import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Details.css';

class Details extends Component {
  render() {
    const { movie } = this.props;

    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } className="img-details" />
        <p>{`Title: ${title}`}</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <nav className="details-buttons-container">
          <Link to="/" className="details-button">Back</Link>
          <Link to={ `/movies/${id}/edit` } className="details-button"> Edit </Link>
          <Link to={ `/movies/${id}/delete` } className="details-button">Delete</Link>
        </nav>

      </div>
    );
  }
}

Details.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
    id: PropTypes.number,
    genre: PropTypes.string,

  }).isRequired,
};

export default Details;
