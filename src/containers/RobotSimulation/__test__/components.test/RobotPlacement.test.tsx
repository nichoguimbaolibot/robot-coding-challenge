import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RobotPlacement from 'containers/RobotSimulation/components/RobotPlacement';
import sinon from 'sinon';

afterEach(cleanup);

describe('test ROBOTPLACEMENT component', () => {
  const handleRobotPlacement = sinon.spy();
  it('renders RobotPlacement component', () => {
    const { asFragment } = render(
      <RobotPlacement onRobotPlacement={handleRobotPlacement} />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('must have onChangeEvent for x-axis position', () => {
    const TEST_ID = 'x-axis-test';
    const { getByTestId } = render(
      <RobotPlacement onRobotPlacement={handleRobotPlacement} />,
    );

    fireEvent.change(getByTestId(TEST_ID));
  });

  it('must have onChangeEvent for robot cardinal direction', () => {
    const TEST_ID = 'direction-test';
    const { getByTestId } = render(
      <RobotPlacement onRobotPlacement={handleRobotPlacement} />,
    );

    fireEvent.change(getByTestId(TEST_ID));
  });

  it('must have onChangeEvent for y-axis position', () => {
    const TEST_ID = 'y-axis-test';
    const { getByTestId } = render(
      <RobotPlacement onRobotPlacement={handleRobotPlacement} />,
    );

    fireEvent.change(getByTestId(TEST_ID));
  });

  it('must have onClickEvent for ROBOTPLACEMENT position', () => {
    const TEST_ID = 'place-robot-test';
    const { getByTestId } = render(
      <RobotPlacement onRobotPlacement={handleRobotPlacement} />,
    );

    fireEvent.click(getByTestId(TEST_ID));
  });
});
