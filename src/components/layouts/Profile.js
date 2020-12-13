import React from 'react';
import { connect } from 'react-redux';

function Profile(props) {
  return (
    <div className="user-view">
      <div className="background">
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f41cdc64-679a-4284-9d6f-3e75890cdf70/ddmntt4-8045c4e4-48bd-4a27-a795-07067ca5265f.jpg/v1/fill/w_1264,h_632,q_70,strp/deviantart_banner_by_astrospaze_ddmntt4-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD02NDAiLCJwYXRoIjoiXC9mXC9mNDFjZGM2NC02NzlhLTQyODQtOWQ2Zi0zZTc1ODkwY2RmNzBcL2RkbW50dDQtODA0NWM0ZTQtNDhiZC00YTI3LWE3OTUtMDcwNjdjYTUyNjVmLmpwZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.B68ClwHam1WzfazJ8GUu1td-2CcVGgpkd4HORhyJdAo" />
      </div>
      <a href="#user">
        <img className="circle" src={props.profile.img} />
      </a>
      <a href="#name">
        <span className="white-text name">
          {props.profile.lastName} {props.profile.firstName}
        </span>
      </a>
      <a href="#email">
        <span className="white-text email">{props.profile.email}</span>
      </a>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(Profile);
