import React, { Component } from 'react';
import { addToWishList } from '../../store/actions/authActions';
import { connect } from 'react-redux';

class ProjectSummary extends Component {
  state = {
    id: this.props.project.id,
  };
  render() {
    const { project } = this.props;
    return (
      <div class="col s12 m4 l3">
        <div className="card">
          <div className="card-image">
            <img src={project.images[0]} alt={project.source} />
          </div>
          <div className="card-content grey-text text-darken-3">
            <span className="card-title">{project.title}</span>
            <p>{project.price}</p>
            <a
              className="btn dokiColor halfway-fab waves-effect waves-light "
              onClick={() => this.props.addToWishList(this.state)}>
              <i class="material-icons">add_shopping_cart</i>
            </a>
            <a
              className="btn halfway-fab waves-effect waves-light red right"
              onClick={() => this.props.addToWishList(this.state)}>
              <i class="material-icons">favorite</i>
            </a>
            <p className="grey-text">3rd</p>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addToWishList: (newWish) => dispatch(addToWishList(newWish)),
  };
};

export default connect(null, mapDispatchToProps)(ProjectSummary);
