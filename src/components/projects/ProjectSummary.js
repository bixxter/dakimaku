import React, { Component } from 'react';
import { addToWishList } from '../../store/actions/authActions';
import {connect} from 'react-redux';

class ProjectSummary extends Component {
  state = {
    id: this.props.project.id
  }
  render(){
    const { project } = this.props;
    return (
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3 z-depth-1">
          <div className="card-image">
            <img src={project.images[0]} alt={project.source} />
            <a className="btn-floating halfway-fab waves-effect waves-light red" onClick={() => this.props.addToWishList(this.state)}><i class="material-icons">add</i></a>
          </div>
          <span className="card-title">{project.title}</span>
          <p>{project.price}</p>
          <p className="grey-text">3rd</p>
        </div>
      </div>
    );
  }
  
};
const mapDispatchToProps = (dispatch) => {
  return{
      addToWishList: (newWish) => dispatch(addToWishList(newWish))
  }
}

export default connect(null, mapDispatchToProps)(ProjectSummary)
