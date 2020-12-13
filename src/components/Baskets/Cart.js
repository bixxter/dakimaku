import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCartList } from '../../store/actions/authActions';

class Cart extends Component {
  render() {
    const { profile, projects } = this.props;
    console.log(profile);
    return (
      <div className="container">
        <h1 className="dokiFont">Your shopping cart</h1>
        <table className="basketTable">
          <thead className="tableTitle">
            <tr>
              <td>Pillows</td>
              <td>Price</td>
              <td>Amount</td>
              <td></td>
            </tr>
          </thead>
          <thead>
            {projects &&
              profile.cartList &&
              profile.cartList.map((cart) => {
                console.log(projects);
                const theCart = projects.filter((project) => project.id === cart.id);
                return (
                  <tr>
                    <td>{theCart[0].title}</td>
                    <td>{theCart[0].price}</td>
                    <td>{cart.amount}</td>
                    <td>
                      <button
                        className="btn red lighten-1 z-depth-0"
                        onClick={() => this.props.removeFromCartList(cart)}>
                        x
                      </button>
                    </td>
                  </tr>
                );
              })}
          </thead>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile,
    projects: state.firestore.ordered.projects,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCartList: (oldCart) => dispatch(removeFromCartList(oldCart)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
