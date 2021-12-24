import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  fetchMissions,
  joinMission,
  leaveMission,
  updateStatus,
} from '../redux/missions/missions';

function Mission({
  id, status, missionName, description, joined, Bg,
}) {
  const dispatch = useDispatch();

  function eventHandler(e) {
    const btn = e.target.className;
    const { id } = e.target;

    if (btn === 'state') {
      dispatch(joinMission(id));
      dispatch(updateStatus(id));
      let arr = [];
      const obj = {
        status,
        id,
        joined: false,
        bg: 'status_2',
      };
      arr.push(obj);
      if (localStorage.getItem('statusData') !== null) {
        const localArr = JSON.parse(localStorage.getItem('statusData'));
        arr.forEach((item) => {
          localArr.forEach((items) => {
            if (items.id !== item.id) {
              arr.push(items);
            } else {
              arr = arr.filter((ite) => ite.id === item.id);
            }
          });
        });
      }
      localStorage.setItem('statusData', JSON.stringify(arr));
    } else if (btn === 'state_2') {
      dispatch(leaveMission(id));
      dispatch(updateStatus(id));
      const arr1 = JSON.parse(localStorage.getItem('statusData'));
      const index = arr1.findIndex((item) => item.id === id);
      arr1.splice(index, 1);
      localStorage.setItem('statusData', JSON.stringify(arr1));
    }
  }

  function addBTN(state) {
    if (state) {
      return (
        <button
          type="button"
          id={id}
          className="state"
          onClick={eventHandler}
        >
          Join Mission
        </button>
      );
    }
    return (
      <button
        type="button"
        id={id}
        className="state_2"
        onClick={eventHandler}
      >
        Leave Mission
      </button>
    );
  }

  return (
    <tr key={id} id={id}>
      <td>{missionName}</td>
      <td className="m_d">{description}</td>
      <td>
        <p className={Bg}>{status}</p>
      </td>
      <td>{addBTN(joined)}</td>
    </tr>
  );
}

Mission.propTypes = {
  id: PropTypes.string.isRequired,
  missionName: PropTypes.string.isRequired,
  joined: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  Bg: PropTypes.string.isRequired,
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
      <table className="mission-table">
        <tbody>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>change</th>
          </tr>
          {missionsList.map((mission) => (
            <Mission
              key={mission.id}
              id={mission.id}
              status={mission.status}
              missionName={mission.missionName}
              description={mission.description}
              joined={mission.joined}
              Bg={mission.Bg}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
