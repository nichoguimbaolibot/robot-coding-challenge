import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Robot from 'containers/RobotSimulation/components/Robot';
import { robotCalculation } from 'constant/robotMovementCalculation';

afterEach(cleanup);

describe('test ROBOT component', () => {
  const TEST_ID = 'robot-test';
  it('renders ROBOT component', () => {
    const xAxisPlacement = 0;
    const yAxisPlacement = 0;
    const robotDirection = 0;
    const isPosition = false;
    const { asFragment } = render(
      <Robot
        xAxisPlacement={xAxisPlacement}
        yAxisPlacement={yAxisPlacement}
        robotDirection={robotDirection}
        isPosition={isPosition}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('expect ROBOT to be display BLOCK', () => {
    const xAxisPlacement = 0;
    const yAxisPlacement = 0;
    const robotDirection = 0;
    const isPosition = true;
    const { getByTestId } = render(
      <Robot
        xAxisPlacement={xAxisPlacement}
        yAxisPlacement={yAxisPlacement}
        robotDirection={robotDirection}
        isPosition={isPosition}
      />,
    );
    expect(getByTestId(TEST_ID).style.display).toBe('block');
  });

  it('expect ROBOT to be display NONE', () => {
    const xAxisPlacement = 0;
    const yAxisPlacement = 0;
    const robotDirection = 0;
    const isPosition = false;
    const { getByTestId } = render(
      <Robot
        xAxisPlacement={xAxisPlacement}
        yAxisPlacement={yAxisPlacement}
        robotDirection={robotDirection}
        isPosition={isPosition}
      />,
    );
    expect(getByTestId(TEST_ID).style.display).toBe('none');
  });

  it('expect ROBOT to have RIGHT COMPUTATION', () => {
    const xAxisPlacement = 0;
    const yAxisPlacement = 0;
    const robotDirection = 0;
    const isPosition = true;
    const xAxisCalculation = robotCalculation.getXAxisMovement(xAxisPlacement);
    const yAxisCalculation = robotCalculation.getYAxisMovement(yAxisPlacement);
    const { getByTestId } = render(
      <Robot
        xAxisPlacement={xAxisPlacement}
        yAxisPlacement={yAxisPlacement}
        robotDirection={robotDirection}
        isPosition={isPosition}
      />,
    );

    const robotMovementCoordinates = `translate(${xAxisCalculation}px,${yAxisCalculation}px) rotate(${robotDirection}deg)`;

    expect(getByTestId(TEST_ID).style.transform).toBe(robotMovementCoordinates);
  });
});
