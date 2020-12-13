import React, { Component } from 'react';

export default class TextContent extends Component {
  render() {
    return (
      <div className="dokiBlock z-depth-1 textContent">
        <div className="textContentImg">
          <img
            src="https://lh5.googleusercontent.com/MENOAmOQSVtExHmAMMMW1e52wlEqVKTxhF4muDxS9f5dEePaew43N9-ZB0b3s6EfxTl8DewrFt7RFIyXFDsxO7Gxml6mhn89tPZ-842g6jEjXSsbkYviogRBrIZbf5xdoDYoN8Fm"
            alt=""
          />
        </div>
        <div>
          <h1 className="dokiFont">About Dakimaku</h1>
          <p>
            A dakimakura (抱き枕) is a long pillow with a printed design originating from Japan. The
            name literally translates to “hug pillow”: daki (抱き) means “to embrace” and makura
            (枕) means “pillow”. Dakimakura have become a cultural phenomenon, and are now widely
            recognized around the world. Some anime and manga have begun to include dakimakura in
            their official merchandise. It’s a common vacation souvenir, too.
          </p>
        </div>
      </div>
    );
  }
}
