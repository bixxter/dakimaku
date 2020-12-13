import React, { Component } from 'react';
import { addToWishList } from '../../store/actions/authActions';
import { addToCartList } from '../../store/actions/authActions';
import { connect } from 'react-redux';

class ProjectSummary extends Component {
  state = {
    id: this.props.project.id,
    amount: 0,
  };
  addToCartFirst = (e) => {
    e.preventDefault();
    this.setState({ amount: this.state.amount + 1 });
  };
  addCart = (e) => {
    e.preventDefault();
    this.setState({ amount: this.state.amount + 1 });
  };
  removeCart = (e) => {
    e.preventDefault();
    this.setState({ amount: this.state.amount - 1 });
  };
  render() {
    const { project } = this.props;
    return (
      <div className=" card1">
        <div className="card">
          <div className="card-image">
            <img src={project.images[0]} alt={project.source} />
          </div>
          <div className="card-content grey-text text-darken-3">
            <span className="card-title">{project.title}</span>
            <p>{project.price}</p>
            <div className="card-action">
              {this.state.amount > 0 ? (
                <div>
                  <button
                    className="btn dokiColor halfway-fab waves-effect waves-light"
                    onClick={this.removeCart}>
                    <i className="material-icons">remove</i>
                  </button>
                  <button className="btn dokiColor halfway-fab waves-effect waves-light">
                    {this.state.amount}
                  </button>
                  <button
                    className="btn dokiColor halfway-fab waves-effect waves-light"
                    onClick={this.addCart}>
                    <i class="material-icons">add</i>
                  </button>
                  <button
                    className="btn dokiColor halfway-fab waves-effect waves-light"
                    onClick={(e) => {
                      e.preventDefault();
                      this.props.addToCartList(this.state);
                    }}>
                    {' '}
                    <i className="material-icons">add_shopping_cart</i>{' '}
                  </button>
                </div>
              ) : (
                <button
                  className="btn dokiColor halfway-fab waves-effect waves-light"
                  onClick={this.addToCartFirst}>
                  {' '}
                  <i className="material-icons">add_shopping_cart</i>{' '}
                </button>
              )}
              <button
                className="btn halfway-fab waves-effect waves-light red"
                onClick={(e) => {
                  e.preventDefault();
                  this.props.addToWishList(this.state);
                }}>
                {' '}
                <i className="material-icons">favorite</i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addToWishList: (newWish) => dispatch(addToWishList(newWish)),
    addToCartList: (newCart) => dispatch(addToCartList(newCart)),
  };
};

export default connect(null, mapDispatchToProps)(ProjectSummary);
