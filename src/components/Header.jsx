import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Header extends React.Component {
  render() {
    return (
      <header className="movie-card-header">
        <h1 className="page-title">Movie Cards Library</h1>
        <nav className="header-buttons-container">
          <Link to="/" className="header-link">HOME</Link>
          <Link to="/movies/new" className="header-link">ADD MOVIE</Link>
        </nav>

      </header>
    );
  }
}

export default Header;
