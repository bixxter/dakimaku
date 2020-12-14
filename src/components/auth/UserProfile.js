import React from 'react';
import { connect } from 'react-redux';

function UserProfile(props) {
  const { profile, auth } = props;
  console.log(auth);
  return (
    <div className="container">
      <div className="card profileCard">
        <div className="card-image">
          <img src={profile.img} />
        </div>
        <div className="card-content">
          <span className="card-title">
            {profile.lastName} {profile.firstName}
          </span>
          <p>Email: {auth.email}</p>
          <p>
            Email Verifcation:{' '}
            {auth.emailVerified ? (
              <span className="light-green-text text-accent-4">Email verified</span>
            ) : (
              <span className="red-text text-accent-4">Not verified</span>
            )}
          </p>
          <p>Your role: {profile.role === 'God' ? <h1 className="dokiFont amber-text text-darken-3 center" >MEIN LIEBEN, GOTT!</h1> : profile.role }</p>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(UserProfile);
