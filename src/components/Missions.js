import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../redux/missions/missions';

function Mission(mission) {
  return (
    <tr key={mission.mission.missionId}>
      <td>{mission.mission.missionName}</td>
      <td className="m_d">{mission.mission.description}</td>
      <td>
        <span className="status" style={{ textTransform: 'uppercase' }}>
          Not a member
        </span>
      </td>
      <td>
        <button type="button" className="state">
          Join Mission
        </button>
      </td>
    </tr>
  );
}

const Missions = () => {
  const missionsList = useSelector((state) => state.missionsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);
  return (
    <div>
      <h1>Mission Page </h1>
      <table>
        <tbody>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>change</th>
          </tr>
          {missionsList.map((mission) => (
            <Mission key={mission.mission_id} mission={mission} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
