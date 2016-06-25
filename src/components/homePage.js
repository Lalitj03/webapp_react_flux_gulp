"use strict";

var React = require('react');

var Home = React.createClass({
  render: function() {
    return (
      <div className="jumbotron">
        <h1>Welcome Home</h1>
        <p>Something which should not bother you...............</p>
      </div>
    );
  }
});

module.exports = Home;
