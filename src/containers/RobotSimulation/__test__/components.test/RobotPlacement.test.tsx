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
    const testId = 'x-axis-test';
    const { getByTestId } = render(
      <RobotPlacement onRobotPlacement={handleRobotPlacement} />,
    );

    fireEvent.change(getByTestId(testId));
  });

  it('must have onChangeEvent for robot cardinal direction', () => {
    const testId = 'direction-test';
    const { getByTestId } = render(
      <RobotPlacement onRobotPlacement={handleRobotPlacement} />,
    );

    fireEvent.change(getByTestId(testId));
  });

  it('must have onChangeEvent for y-axis position', () => {
    const testId = 'y-axis-test';
    const { getByTestId } = render(
      <RobotPlacement onRobotPlacement={handleRobotPlacement} />,
    );

    fireEvent.change(getByTestId(testId));
  });

  it('must have onClickEvent for ROBOTPLACEMENT position', () => {
    const testId = 'place-robot-test';
    const { getByTestId } = render(
      <RobotPlacement onRobotPlacement={handleRobotPlacement} />,
    );

    fireEvent.click(getByTestId(testId));
  });
});
