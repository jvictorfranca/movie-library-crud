import React from 'react';
import PropTypes from 'prop-types';

class InputLabeled extends React.Component {
  render() {
    const { name, value, handleData, text } = this.props;
    return (
      <label htmlFor={ name } data-testid={ `${name}-input-label` }>
        {text}
        <input
          type="text"
          name={ name }
          id={ name }
          value={ value }
          data-testid={ `${name}-input` }
          onChange={ handleData }
        />
      </label>
    );
  }
}

InputLabeled.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleData: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default InputLabeled;
