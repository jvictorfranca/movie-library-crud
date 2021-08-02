import React from 'react';
import PropTypes from 'prop-types';

class InputLabeledRating extends React.Component {
  render() {
    const { value, handleData } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          id="rating"
          value={ value }
          data-testid="rating-input"
          onChange={ handleData }
        />
      </label>
    );
  }
}

InputLabeledRating.propTypes = {
  value: PropTypes.number.isRequired,
  handleData: PropTypes.func.isRequired,
};

export default InputLabeledRating;
