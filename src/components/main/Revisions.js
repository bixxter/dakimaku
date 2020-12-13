import React, { Component } from 'react';
import Slider from 'react-slick';
export default class Revisions extends Component {
  state = {
    users: [
      { name: 'Andrei', text: 'Nice pillows!I had great night!', grades: [1, 2, 3, 4, 5] },
      { name: 'Mikolai', text: 'Another Earth!', grades: [1, 2, 3, 4, 5] },
      { name: 'Meow', text: 'Meow-meow-Meeeow!', grades: [1, 2, 3, 4] },
    ],
  };
  render() {
    const settings = {
      dots: true,
      infinite: true,
      arrow: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 4000,
      cssEase: 'linear',
    };
    return (
      <Slider {...settings}>
        {this.state.users.map((user) => {
          return (
            <div className="dokiBlock z-depth-1 revisionSlide">
              <div className="card revision">
                <div className="black-text">
                  <h3>{user.name}</h3>
                  <p>{user.text}</p>
                </div>
                <div className="stars yellow-text">
                  {user.grades.map((grade) => {
                    return <i class="material-icons">grade</i>;
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    );
  }
}
