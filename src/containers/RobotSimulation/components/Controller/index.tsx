import React from 'react';
import Button from 'antd/lib/button';

interface IControllerProps {
  onChangeMovementToLeft: () => void;
  onChangeMovementToRight: () => void;
  onChangeRobotMovement: () => void;
}

const Controller: React.FunctionComponent<IControllerProps> = ({
  onChangeMovementToLeft,
  onChangeMovementToRight,
  onChangeRobotMovement,
}): JSX.Element => (
  <div className="direction-section _spacer-md">
    <h4 className="title">Movement and Positions</h4>
    <Button
      className="left-button ui-button-primary"
      onClick={onChangeMovementToLeft}
    >
      LEFT
    </Button>

    <Button
      className="right-button ui-button-primary"
      onClick={onChangeMovementToRight}
    >
      RIGHT
    </Button>

    <Button
      className="move-button ui-button-alpha"
      onClick={onChangeRobotMovement}
    >
      MOVE
    </Button>
  </div>
);

export default Controller;
