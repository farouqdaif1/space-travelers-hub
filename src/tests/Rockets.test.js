import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import Rockets from '../Components/rockets/Rockets';

describe('Rockets Component test', () => {
  it('Renders Rocket Page', () => {
    const app = renderer.create(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    ).toJSON();
    expect(app).toMatchSnapshot();
  });
});
