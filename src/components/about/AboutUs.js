import React, { Component } from 'react';
import aboutUs from '../../img/about.jpg';

export default class AboutUs extends Component {
  render() {
    return (
      <div className="container section">
        <div className="aboutUs">
          <img src={aboutUs} alt="About us anime picture" />
          <h1>What is dakimakuru?</h1>
          <p>
            A dakimakura (抱き枕) is a long pillow with a printed design originating from Japan. The
            name literally translates to “hug pillow”: daki (抱き) means “to embrace” and makura
            (枕) means “pillow”. Dakimakura have become a cultural phenomenon, and are now widely
            recognized around the world. Some anime and manga have begun to include dakimakura in
            their official merchandise. It’s a common vacation souvenir, too.
          </p>
          <h1>Our History</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorum rerum tempora
            non fugiat sapiente quas sint quam vero nulla. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Cupiditate maiores odio tempora ex nesciunt fuga repudiandae ad odit
            porro soluta suscipit blanditiis distinctio, corporis rerum. Nihil nesciunt, facilis
            asperiores at assumenda modi maiores quas dignissimos ipsa fugit inventore eligendi fuga
            cupiditate eaque a, veritatis magni possimus exercitationem! Reprehenderit, vitae ipsum!
          </p>
        </div>
      </div>
    );
  }
}
