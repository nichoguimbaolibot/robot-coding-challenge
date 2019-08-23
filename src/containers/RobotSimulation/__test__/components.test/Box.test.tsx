import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Box from 'containers/RobotSimulation/components/Box';

import { MAX_BOXES } from 'constant/app';

afterEach(cleanup);

it('renders BOX component', () => {
  const { asFragment } = render(<Box rowBoxes={MAX_BOXES} />);
  expect(asFragment()).toMatchSnapshot();
});

it('expect it to have a box-container classname', () => {
  const { getByTestId } = render(<Box rowBoxes={MAX_BOXES} />);
  expect(getByTestId('box-container-test')).toHaveClass('box-container');
});
