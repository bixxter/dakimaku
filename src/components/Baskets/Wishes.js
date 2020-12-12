import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromWishList } from '../../store/actions/authActions';

class Wishes extends Component {
  render() {
    const {profile, projects} = this.props;
    console.log(profile)
    return (
      <div className="container">
        <h1>Your wishes</h1>
        <table className="basketTable">
          <thead className="tableTitle">
            <tr>
              <td>Pillows</td>
              <td>Price</td>
            </tr>
          </thead>
          <thead>
          {projects && profile.wishList && profile.wishList.map(wish => {
            console.log(projects)
            const theWish = projects.filter(project => project.id === wish)
            const id = wish
            return(
              <tr>
                <td>{theWish[0].title}</td>
                <td>{theWish[0].price}</td>
                <td><button onClick={() => this.props.removeFromWishList(id)}>x</button></td>
              </tr>
            )
          })
          }            
          </thead>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile,
    projects: state.firestore.ordered.projects
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    removeFromWishList: (oldWish) => dispatch(removeFromWishList(oldWish))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wishes)