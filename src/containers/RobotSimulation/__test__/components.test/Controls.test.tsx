import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import sinon from 'sinon';
import Controls from 'containers/RobotSimulation/components/Controls';

afterEach(cleanup);

describe('test Controls component', () => {
  const handleChangeMovementToLeft = sinon.spy();
  const handleChangeMovementToRight = sinon.spy();
  const handleChangeRobotMovement = sinon.spy();
  const handleReportRobotPosition = sinon.spy();

  it('renders CONTROLS component', () => {
    const { asFragment } = render(
      <Controls
        onChangeMovementToLeft={handleChangeMovementToLeft}
        onChangeMovementToRight={handleChangeMovementToRight}
        onChangeRobotMovement={handleChangeRobotMovement}
        onReportRobotPosition={handleReportRobotPosition}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('expect MOVE TO RIGHT event', () => {
    const TEST_ID = 'button-move-right-test';
    const { getByTestId } = render(
      <Controls
        onChangeMovementToLeft={handleChangeMovementToLeft}
        onChangeMovementToRight={handleChangeMovementToRight}
        onChangeRobotMovement={handleChangeRobotMovement}
        onReportRobotPosition={handleReportRobotPosition}
      />,
    );
    fireEvent.click(getByTestId(TEST_ID));
  });

  it('expect ROBOT MOVEMENT event', () => {
    const TEST_ID = 'button-move-test';
    const { getByTestId } = render(
      <Controls
        onChangeMovementToLeft={handleChangeMovementToLeft}
        onChangeMovementToRight={handleChangeMovementToRight}
        onChangeRobotMovement={handleChangeRobotMovement}
        onReportRobotPosition={handleReportRobotPosition}
      />,
    );
    fireEvent.click(getByTestId(TEST_ID));
  });

  it('expect MOVE TO LEFT event', () => {
    const TEST_ID = 'button-move-left-test';
    const { getByTestId } = render(
      <Controls
        onChangeMovementToLeft={handleChangeMovementToLeft}
        onChangeMovementToRight={handleChangeMovementToRight}
        onChangeRobotMovement={handleChangeRobotMovement}
        onReportRobotPosition={handleReportRobotPosition}
      />,
    );
    fireEvent.click(getByTestId(TEST_ID));
  });

  it('expect REPORT event', () => {
    const TEST_ID = 'button-report-test';
    const { getByTestId } = render(
      <Controls
        onChangeMovementToLeft={handleChangeMovementToLeft}
        onChangeMovementToRight={handleChangeMovementToRight}
        onChangeRobotMovement={handleChangeRobotMovement}
        onReportRobotPosition={handleReportRobotPosition}
      />,
    );
    fireEvent.click(getByTestId(TEST_ID));
  });
});
