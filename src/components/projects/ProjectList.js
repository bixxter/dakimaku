import React from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';

const ProjectList = ({ projects }) => {
  if (projects){
    return (
      <div className="project-list section">
        {projects.map((project) => {
            return (
              <Link to={'/project/' + project.id} key={project.id}>
                <ProjectSummary project={project} />
              </Link>
            );
          })}
      </div>
    );
  }else{
    return(
      <div className="preloader-wrapper big active centr3">
      <div className="spinner-layer spinner-blue-only">
        <div className="circle-clipper left">
          <div className="circle"></div>
        </div><div className="gap-patch">
          <div className="circle"></div>
        </div><div className="circle-clipper right">
          <div className="circle"></div>
        </div>
      </div>
    </div>
    )
  }
};
export default ProjectList;
