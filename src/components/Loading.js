import React, { Component } from 'react';

class Loading extends Component {
  render() {
    return (
      <section className="loading-container">
        <h1 className="loading-h1">Loading...</h1>
        <div className="loading-div" />
      </section>
    );
  }
}

export default Loading;
