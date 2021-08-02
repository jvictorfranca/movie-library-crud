import React from 'react';
import PropTypes from 'prop-types';

class InputLabeledImage extends React.Component {
  render() {
    const { value, handleData } = this.props;
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="imagePath"
          id="imagePath"
          value={ value }
          data-testid="image-input"
          onChange={ handleData }
        />
      </label>
    );
  }
}

InputLabeledImage.propTypes = {
  value: PropTypes.string.isRequired,
  handleData: PropTypes.func.isRequired,
};

export default InputLabeledImage;
