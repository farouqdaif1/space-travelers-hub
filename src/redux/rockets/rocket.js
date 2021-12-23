import fetchRockets from '../../components/rockets/Rocketapi';

const GET_ROCKETS = 'rocketStore/rockets/GET_ROCKETS';
// state
const initialState = [];

// Actions
export const getAllRockects = () => async (dispatch) => {
  const rocketsData = await fetchRockets();
  const rockets = Object.values(rocketsData).map((i) => i);
  dispatch({
    type: GET_ROCKETS,
    rockets,
  });
};

// reducers
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return action.rockets;
    default:
      return state;
  }
};
export default reducer;
