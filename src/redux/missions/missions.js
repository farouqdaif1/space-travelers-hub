const missionsURL = 'https://api.spacexdata.com/v3/missions';

const GET_MISSIONS = 'GET_MISSIONS';
const JOIN_MISSION = 'JOIN_MISSION';
const LEAVE_MISSION = 'LEAVE_MISSION';
const UPDATE_STATUS = 'UPDATE_STATUS';
const initialState = [];

export const getMissions = (payload) => ({
  type: GET_MISSIONS,
  payload,
});

export const joinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

export const leaveMission = (payload) => ({
  type: LEAVE_MISSION,
  payload,
});

export const updateStatus = (payload) => ({
  type: UPDATE_STATUS,
  payload,
});

let localDATA = [
  {
    id: '',
    joined: true,
    status: 'NOT A MEMBER',
    Bg: 'status',
  },
];

export const fetchMissions = () => async (dispatch) => {
  if (localStorage.getItem('statusData')) {
    localDATA = JSON.parse(localStorage.getItem('statusData'));
  }

  const missions = await fetch(missionsURL).then((res) => res.json());
  const ID = Object.keys(missions);
  const missionsArr = [];

  function joinValue(id) {
    const index = localDATA.findIndex((item) => item.id === id);
    if (index !== -1) {
      return localDATA[index].joined;
    }
    return true;
  }

  function statusValue(join) {
    if (join) {
      return 'NOT A MEMBER';
    }
    return 'Active MEMBER';
  }

  function BgValue(join) {
    if (join) {
      return 'status';
    }
    return 'status_2';
  }

  ID.map((key) => missionsArr.push({
    key,
    id: missions[key].mission_id,
    missionName: missions[key].mission_name,
    category: missions[key].manufacturers,
    description: missions[key].description,
    joined: joinValue(missions[key].mission_id),
    status: statusValue(joinValue(missions[key].mission_id)),
    Bg: BgValue(joinValue(missions[key].mission_id)),
  }));
  dispatch(getMissions(missionsArr));
};

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return action.payload;
    case JOIN_MISSION:
    case LEAVE_MISSION:
      return state.map((mission) => {
        if (mission.id !== action.payload) {
          return mission;
        }
        return { ...mission, joined: !mission.joined };
      });
    case UPDATE_STATUS:
      return state.map((mission) => {
        if (mission.id === action.payload) {
          if (mission.status === 'NOT A MEMBER') {
            return { ...mission, status: 'Active MEMBER', Bg: 'status_2' };
          }
          if (mission.status === 'Active MEMBER') {
            return { ...mission, status: 'NOT A MEMBER', Bg: 'status' };
          }
        }
        return mission;
      });
    default:
      return state;
  }
};

export default missionsReducer;
