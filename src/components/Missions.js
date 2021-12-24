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

    if (btn === 'btn-join-mission') {
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
    } else if (btn === 'btn-leave-mission') {
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
          className="btn-join-mission"
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
        className="btn-leave-mission"
        onClick={eventHandler}
      >
        Leave Mission
      </button>
    );
  }

  return (
    <tr key={id} id={id} className="missions-tr">
      <td className="missions-td">{missionName}</td>
      <td className="missions-td">{description}</td>
      <td className="missions-td">
        <p className={Bg}>{status}</p>
      </td>
      <td className="missions-td">{addBTN(joined)}</td>
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
      <table className="mission-table">
        <tbody>
          <tr>
            <th className="missions-th">Mission</th>
            <th className="missions-th">Description</th>
            <th className="missions-th">Status</th>
            <th className="missions-th">change</th>
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
