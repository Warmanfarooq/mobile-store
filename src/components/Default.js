import React, { Component } from "react";

export default class Default extends Component {
  render() {
    return (
      <div className="col-10 mx-auto col-md-6 text-title text-center text-capitalized my-0 mx-0">
        <h1 className="text-danger">Error 404</h1>
        <h2 className="text-muted">the requested url not found</h2>
      </div>
    );
  }
}
