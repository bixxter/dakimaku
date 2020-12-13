import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import Slider from 'react-slick';

function ProjectDetails(props) {
  const { project } = props;
  const settings = {
    dots: true,
    infinite: true,
    arrow: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
  };
  if (project) {
    return (
      <div className="container section projectDetails">
        <div className="card z-depth-0">
          <div className="card-image">
            <Slider {...settings}>
              {project.images.map((img, index) => {
                return (
                  <div className="slide">
                    <img src={img} alt={index} />
                  </div>
                );
              })}
            </Slider>
          </div>
          <div className="card-content">
            <h1 className="card-title">{project.title}</h1>
            <p>
              Source link:{' '}
              <a href={project.source_url} target="_blank">
                {project.source}
              </a>
            </p>

            <p>Price: {project.price}</p>
            <p>Size: {project.size}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>{project.createdAt.toDate().toLocaleDateString()}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center progress centr">
        <div className="indeterminate">
          <p>Loading project...</p>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'projects' }]),
)(ProjectDetails);
