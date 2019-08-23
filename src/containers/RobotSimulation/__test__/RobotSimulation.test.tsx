import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RobotSimulation from 'containers/RobotSimulation';

afterEach(cleanup);

describe('test RobotSimulation Module', () => {
  it('renders ROBOTSIMULATION component', () => {
    const { asFragment } = render(<RobotSimulation />);
    expect(asFragment()).toMatchSnapshot();
  });
});
