import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default class AutoPlay extends Component {
  state = {
    images: [
      'https://i.servimg.com/u/f58/17/61/54/47/ojo10.jpg',
      'https://media.mymovies.it/filmclub/2006/10/211/cover1000.jpg',
      'https://truth.bahamut.com.tw/s01/201607/e36ec44d6e1738b3bd35f81c0136e0b4.JPG',
      'https://truth.bahamut.com.tw/s01/201607/e36ec44d6e1738b3bd35f81c0136e0b4.JPG',
      'https://truth.bahamut.com.tw/s01/201607/e36ec44d6e1738b3bd35f81c0136e0b4.JPG',
    ],
  };
  render() {
    const settings = {
      dots: true,
      infinite: true,
      arrow: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 3000,
      cssEase: 'linear',
    };
    return (
      <div className="dokiBlock z-depth-1">
        <h2>Choose your first Dakimakura!</h2>
        <Slider {...settings}>
          {this.state.images.map((img) => {
            return (
              <div className="slide">
                <img src={img} />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
