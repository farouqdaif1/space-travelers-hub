import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bookRocket, cancleRocket } from '../../redux/rockets/rocket';

const Rocket = ({ rocket }) => {
  const dispatch = useDispatch();
  return (
    <li className="rocket-item" key={rocket.id}>
      <div className="rocket-img"><img src={rocket.flickr_images} alt={rocket.name} /></div>
      <div className="rocket-description">
        <h2>{rocket.rocket_name}</h2>
        <p>
          {rocket.reserved && (
            <span className="success-rocket">Reserved</span>
          )}
          {rocket.description}
        </p>
        <div>
          {rocket.reserved === false || rocket.reserved === undefined
            ? (
              <button
                type="button"
                className="available-button"
                onClick={
                  () => {
                    dispatch(bookRocket(rocket.id));
                  }
                }
              >
                Reserve Rocket
              </button>
            )
            : (
              <button
                type="button"
                className="reserved-button"
                onClick={
                  () => {
                    dispatch(cancleRocket(rocket.id));
                  }
                }
              >
                Cancel Reservation
              </button>
            )}
        </div>
      </div>
    </li>
  );
};
Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string,
    reserved: PropTypes.bool,
    flickr_images: PropTypes.arrayOf(PropTypes.string),
    rocket_name: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};
export default Rocket;
