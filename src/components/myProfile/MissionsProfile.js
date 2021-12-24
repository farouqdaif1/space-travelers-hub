import React from 'react';
import { useSelector } from 'react-redux';
import './MissionsProfile.css';

const MissionProfile = () => {
  const missions = useSelector((state) => state.missionsReducer);
  const missionsFiltered = missions.filter(
    (mission) => mission.joined === false,
  );

  return (
    <div className="mission-profile">
      <section className="content">
        <h1 className="profile-header">My Missions</h1>
        <ul>
          {missionsFiltered.map((mission) => (
            <li className="mission-list" key={mission.id}>
              {mission.missionName}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
export default MissionProfile;
