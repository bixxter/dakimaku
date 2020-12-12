import React from 'react';
import { connect } from 'react-redux';

function UserProfile(props) {
    const {profile, auth} = props
    console.log(auth)
    return (
        <div class="row">
            <div class="col s12 m6">
                <div class="card">
                    <div class="card-image">
                        <img className="circle" src={profile.img} />
                    </div>
                    <div class="card-content">
                    <span class="card-title">{profile.lastName} {profile.firstName}</span>
                        <p>Email: {auth.email}</p>
                        <p>Email Verifcation: {auth.emailVerified ? <p className="light-green-text text-accent-4">Email verified</p> : <p className="red-text text-accent-4">Not verified</p>}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(UserProfile)
