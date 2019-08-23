import React from 'react';
import Button from 'antd/lib/button';

interface IControllerProps {
  onChangeMovementToLeft: () => void;
  onChangeMovementToRight: () => void;
  onChangeRobotMovement: () => void;
  onReportRobotPosition: () => void;
}

const Controller: React.FunctionComponent<IControllerProps> = ({
  onChangeMovementToLeft,
  onChangeMovementToRight,
  onChangeRobotMovement,
  onReportRobotPosition,
}): JSX.Element => (
  <div className="direction-section">
    <h4 className="title">Movement and Positions</h4>
    <Button
      data-testid="button-move-left-test"
      className="left-button ui-button-primary"
      onClick={onChangeMovementToLeft}
    >
      LEFT
    </Button>

    <Button
      data-testid="button-move-right-test"
      className="right-button ui-button-primary"
      onClick={onChangeMovementToRight}
    >
      RIGHT
    </Button>

    <Button
      data-testid="button-move-test"
      className="move-button ui-button-alpha"
      onClick={onChangeRobotMovement}
    >
      MOVE
    </Button>

    <Button data-testid="button-report-test" onClick={onReportRobotPosition}>
      REPORT
    </Button>
  </div>
);

export default Controller;
