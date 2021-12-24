import fetchRockets from '../../components/rockets/Rocketapi';

const GET_ROCKETS = 'rocketStore/rockets/GET_ROCKETS';
const BOOK_ROCKET = 'rocketStore/rockets/BOOK_ROCKET';
const CANCLE_ROCKET = 'rocketStore/rockets/CANCLE_ROCKET';

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
export const bookRocket = (id) => ({
  type: BOOK_ROCKET, id,
});
export const cancleRocket = (id) => ({
  type: CANCLE_ROCKET, id,
});
// reducers
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return action.rockets;
    case BOOK_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.id) return rocket;
        return { ...rocket, reserved: true };
      });
    case CANCLE_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.id) return rocket;
        return { ...rocket, reserved: false };
      });
    default:
      return state;
  }
};
export default reducer;
