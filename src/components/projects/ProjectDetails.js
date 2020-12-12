import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

function ProjectDetails(props) {
  const { project } = props;
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <div className="card-image">
              <img src={project.images[0]} alt=""/>
            </div>
            <span className="card-title">{project.title}</span>
            <a href={project.source_url} target="_blank" >{project.source}</a>
            <p>{project.price}</p>
            {project.size}
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>2nd September</div>
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
