import React from 'react';
import RenderBookedRocket from './myProfile/rocket-myprofile';
import MissionsProfile from './myProfile/MissionsProfile';
import './myProfile/myProfile.css';

const MyProfile = () => (
  <div className="profile-container">
    <MissionsProfile />
    <RenderBookedRocket />
  </div>
);

export default MyProfile;
