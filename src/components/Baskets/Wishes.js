import React, { Component } from 'react';

export default class Wishes extends Component {
  render() {
    return (
      <div className="container">
        <h1>Your wishes</h1>
        <table className="basketTable">
          <thead className="tableTitle">
            <tr>
              <td>Pillows</td>
              <td>Price</td>
            </tr>
          </thead>
          <thead>
            <tr>
              <td>PEePEe</td>
              <td>1 halal baran</td>
            </tr>
            <tr>
              <td>POPOPOP</td>
              <td>2 halal baran</td>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}
