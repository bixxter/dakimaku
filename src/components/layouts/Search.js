import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Link } from 'react-router-dom';

class Search extends Component {
  state = {
    search: '',
    filtered: [],
  };
  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
    // if (projects) {
    //   this.setState({
    //     filtered: projects.filter((project) => project.title.includes(e.target.value)),
    //   });
    // }
  };
  render() {
    const { projects } = this.props;
    let filtered =
      projects &&
      projects.filter((project) =>
        project.title.toLowerCase().includes(this.state.search.toLowerCase()),
      );
    if (this.state.search.length < 1) {
      filtered = null;
    }
    return (
      <div>
        <form>
          <div className="input-field searchInput">
            <input id="search" type="search" required onChange={this.handleChange} />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            {filtered && (
              <div className="searchResult dokiBlock">
                {filtered.map((result) => {
                  return <Link to={'/project/' + result.id}>{result.title}</Link>;
                })}
              </div>
            )}
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.projects,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'projects' }]),
)(Search);
