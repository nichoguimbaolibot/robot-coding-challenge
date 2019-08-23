import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Table from 'containers/RobotSimulation/components/Table';
import { MAX_BOXES } from 'constant/app';

afterEach(cleanup);

describe('test TABLE component', () => {
  it('renders TABLE component', () => {
    const { asFragment } = render(<Table rowBoxes={MAX_BOXES} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
