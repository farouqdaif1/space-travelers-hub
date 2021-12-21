const missionsURL = 'https://api.spacexdata.com/v3/missions';

const GET_MISSIONS = 'GET_MISSIONS';
const initialState = [];

export const getMissions = (payload) => ({
  type: GET_MISSIONS,
  payload,
});

export const fetchMissions = () => async (dispatch) => {
  const missions = await fetch(missionsURL)
    .then((res) => res.json());
  const ID = Object.keys(missions);
  const missionsArr = [];
  ID.map((key) => missionsArr.push({
    key,
    missionId: missions[key].mission_id,
    missionName: missions[key].mission_name,
    description: missions[key].description,
  }));
  dispatch(getMissions(missionsArr));
};

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return action.payload;
    default:
      return state;
  }
};

export default missionsReducer;
