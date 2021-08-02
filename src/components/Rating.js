import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { props } = this;
    const { rating } = props;
    return (
      <div className="rating" data-testid="rating">
        <span className="rating">{rating}</span>
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
