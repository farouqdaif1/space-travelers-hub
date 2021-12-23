import React from 'react';
import { useSelector } from 'react-redux';

const RenderBookedRocket = () => {
  const rockets = useSelector((state) => state);
  return (
    <div>
      <table>
        <caption>My Rockets</caption>
        <tbody>
          {
                        rockets.rocketsReducer.map((rocket) => (
                          rocket.reserved
                            && (<tr key={rocket.id}><td>{rocket.rocket_name}</td></tr>)
                        ))
                    }
        </tbody>
      </table>
    </div>
  );
};
export default RenderBookedRocket;
