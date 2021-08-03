// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;

    return (
      <form data-testid="search-bar-form" className="search-bar">
        <label htmlFor="textInput" data-testid="text-input-label">
          Search
          <input
            type="text"
            name="searchText"
            id="textInput"
            data-testid="text-input"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
        <label htmlFor="bookmarkedOnly" data-testid="checkbox-input-label">
          Favorite only
          <input
            type="checkbox"
            data-testid="checkbox-input"
            name="bookmarkedOnly"
            id="bookmarkedOnly"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>
        <label htmlFor="select-input" data-testid="select-input-label">
          Genre
          <select
            name="selectedGenre"
            id="select-input"
            data-testid="select-input"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
          >
            <option value="" data-testid="select-option">All</option>
            <option value="action" data-testid="select-option">Action</option>
            <option value="comedy" data-testid="select-option">Comedy</option>
            <option value="thriller" data-testid="select-option">Thriller</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};
