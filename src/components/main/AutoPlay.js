import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default class AutoPlay extends Component {
  state = {
    images: [
      'https://im0-tub-ru.yandex.net/i?id=0cd20b4cf23e1a7cab52ad9ebd8af9e9&n=13',
      'https://im0-tub-ru.yandex.net/i?id=a965076b45ab21352ed99cc481417889&n=13',
      'https://im0-tub-ru.yandex.net/i?id=0a548dbe3e9aaddd9a59ce0fed38f684&n=13',
      'https://fandomhit.ru/wp-content/uploads/2018/08/157169597-1.jpeg',
      'https://ae01.alicdn.com/kf/HTB1zmGjR4jaK1RjSZFAq6zdLFXa0/anime-Game-dakimakura-pillow-case-Azur-Lane-Bilanhangxian.jpg',
      'https://ae01.alicdn.com/kf/HTB10MxUl4WYBuNjy1zkq6xGGpXa4/Japanese-Anime-ALICE-or-ALICE-Hugging-Body-Pillow-Cover-Case-Drop-shipping-Dakimakura-Otaku.jpg',
      'https://animeware.com/wp-content/uploads/2020/11/1792-94c522.jpeg',
      'https://ae01.alicdn.com/kf/HTB1bdJOXynrK1Rjy1Xcq6yeDVXau.jpg',
      'https://im0-tub-ru.yandex.net/i?id=8b46cef0be19ed18ee9842ac243b880e&n=13',

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
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="dokiBlock z-depth-1 sldr">
        <h2>Choose your first Dakimakura!</h2>
        <Slider {...settings}>
          {this.state.images.map((img) => {
            return (
              <div className="slide">
                <img src={img} width="250px" />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
