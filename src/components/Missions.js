import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchMissions } from '../redux/missions/missions';

function Mission({ amission }) {
  return (
    <tr key={amission.missionId}>
      <td>{amission.missionName}</td>
      <td className="m_d">{amission.description}</td>
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

Mission.propTypes = {
  amission: PropTypes.shape({
    missionName: PropTypes.string,
    amission: PropTypes.string,
    missionId: PropTypes.string,
    description: PropTypes.string,

  }).isRequired,
};

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
            <Mission key={mission.mission_id} amission={mission} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
