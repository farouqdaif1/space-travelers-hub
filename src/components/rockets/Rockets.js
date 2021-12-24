import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllRockects } from '../../redux/rockets/rocket';
import Rocket from './Rocket';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state);
  useEffect(() => {
    dispatch(getAllRockects());
  }, [dispatch]);
  return (
    <div>
      <ul className="rocket-list">
        {
          rockets.rocketsReducer.map((rocket) => (
            <Rocket key={rocket.id} rocket={rocket} />
          ))
        }
      </ul>
    </div>
  );
};

export default Rockets;
