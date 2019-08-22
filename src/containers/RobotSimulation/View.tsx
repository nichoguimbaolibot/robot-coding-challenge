import React, { FunctionComponent, useState } from 'react';
import { Howl } from 'howler';
import Notification from 'antd/lib/notification';
import MESSAGES from 'constant/message';
import {
  isCardinalPositionNorth,
  isCardinalPositionEast,
  isCardinalPositionSouth,
  isCardinalPositionWest,
} from 'utils/validatePosition';
import { NORTH, EAST, SOUTH, WEST } from 'constant/cardinalDirection';
import { generateUniqueId } from 'utils/generateUniqueId';
import Controls from './components/Controls';
import RobotPlacement from './components/RobotPlacement';
import Robot from './components/Robot';
import Table from './components/Table';

import { MAXIMUM_ROW_BOXES } from 'constant/app';

const RobotCodingChallenge: FunctionComponent = (): JSX.Element => {
  const [robotXAxisPlacement, setRobotXAxisPlacement] = useState(0);
  const [robotYAxisPlacement, setRobotYAxisPlacement] = useState(0);
  const [robotDirection, setRobotDirection] = useState(0);
  const [report, setReport] = useState({
    robotDirection: 0,
    id: generateUniqueId(),
    robotXAxisPlacement: 0,
    robotYAxisPlacement: 0,
  });
  const [isPosition, setPosition] = useState(false);

  const handleRobotPlacement = (
    xAxis: number,
    yAxis: number,
    cardinalDirection: number,
  ): boolean => {
    const isInvalidPosition = xAxis < 0 || xAxis > 4 || yAxis < 0 || yAxis > 4;
    if (isInvalidPosition) {
      handleShowNotificationMessage(MESSAGES.INVALID_POSITION);
      return false;
    } else {
      robotPlacementSounds();
      setPosition(true);
      setRobotDirection(cardinalDirection);
      setRobotXAxisPlacement(xAxis);
      setRobotYAxisPlacement(yAxis);
      handleUpdateRecordedMovements(cardinalDirection, yAxis, xAxis);
    }

    return true;
  };

  const handleRobotMovement = (): boolean => {
    if (!isPosition) {
      handleShowNotificationMessage(MESSAGES.ROBOT_NOT_FOUND);

      return false;
    }

    const currentDirection = robotDirection % 360;
    let xAxisPlacement = robotXAxisPlacement;
    let yAxisPlacement = robotYAxisPlacement;

    if (isCardinalPositionNorth(currentDirection)) {
      yAxisPlacement++;
    } else if (isCardinalPositionEast(currentDirection)) {
      xAxisPlacement++;
    } else if (isCardinalPositionSouth(currentDirection)) {
      yAxisPlacement--;
    } else if (isCardinalPositionWest(currentDirection)) {
      xAxisPlacement--;
    }

    console.log('yAxisPlacement', yAxisPlacement);

    const isInvalidPosition =
      xAxisPlacement < 0 ||
      xAxisPlacement > 4 ||
      yAxisPlacement < 0 ||
      yAxisPlacement > 4;
    if (isInvalidPosition) {
      handleShowNotificationMessage(MESSAGES.MOVEMENT_NOT_ALLOWED);
      return false;
    } else {
      robotMovementSound();

      setRobotXAxisPlacement(xAxisPlacement);
      setRobotYAxisPlacement(yAxisPlacement);
    }
    console.log('yAxisPlacement', yAxisPlacement);
    handleUpdateRecordedMovements(
      currentDirection,
      yAxisPlacement,
      xAxisPlacement,
    );
    return true;
  };

  const handleChangeMovementToLeft = (): boolean => {
    if (!isPosition) {
      handleShowNotificationMessage(MESSAGES.ROBOT_NOT_FOUND);
      return false;
    }
    const nextDirection = robotDirection - 90;
    robotRotateSound();
    setRobotDirection(nextDirection);
    return true;
  };

  const handleChangeMovementToRight = (): boolean => {
    if (!isPosition) {
      handleShowNotificationMessage(MESSAGES.ROBOT_NOT_FOUND);
      return false;
    }
    const nextDirection = robotDirection + 90;
    robotRotateSound();
    setRobotDirection(nextDirection);
    return true;
  };

  const validateDirection = (position: number) => {
    if (isCardinalPositionNorth(position)) {
      return NORTH;
    } else if (isCardinalPositionEast(position)) {
      return EAST;
    } else if (isCardinalPositionSouth(position)) {
      return SOUTH;
    } else if (isCardinalPositionWest(position)) {
      return WEST;
    }

    return 'INVALID FACE POSITION';
  };

  const handleUpdateRecordedMovements = (
    currentDirection: number,
    yAxis: number,
    xAxis: number,
  ): void => {
    const currentReport = {
      robotDirection: currentDirection,
      id: generateUniqueId(),
      robotXAxisPlacement: xAxis,
      robotYAxisPlacement: yAxis,
    };
    setReport(currentReport);
  };

  const handleShowNotificationMessage = (message: string): void => {
    Notification.warning({
      placement: 'bottomRight',
      message: 'Err...',
      description: message,
    });
    errorNoSound();
    handleUpdateRecordedMovements(0, 0, 0);
  };

  const handleReportRobotPosition = (): boolean => {
    if (!isPosition) {
      handleShowNotificationMessage(MESSAGES.ROBOT_NOT_FOUND);
      return false;
    }
    const message = `X-Axis: ${report.robotXAxisPlacement} Y:Axis: ${
      report.robotYAxisPlacement
    } Cardinal Direction: ${validateDirection(report.robotDirection)}`;
    Notification.success({
      placement: 'bottomRight',
      message: 'Report Position',
      description: message,
    });
    return true;
  };

  const robotRotateSound = (): void => {
    const robotRotateSound = new Howl({
      src: ['/robot-rotate.mp3'],
    });
    robotRotateSound.play();
  };

  const robotMovementSound = (): void => {
    const robotMovementSound = new Howl({
      src: ['/robot-moving.mp3'],
    });
    robotMovementSound.play();
  };

  const errorNoSound = (): void => {
    const errorNoSound = new Howl({
      src: ['/error-no.mp3'],
    });
    errorNoSound.play();
  };

  const robotPlacementSounds = (): void => {
    const robotPlacementSound = new Howl({
      src: ['/robot-placement.mp3'],
    });
    robotPlacementSound.play();
  };

  return (
    <div className="robot-simulation-section">
      <div className="table-container">
        <Table rowBoxes={MAXIMUM_ROW_BOXES} />

        <Robot
          xAxisPlacement={robotXAxisPlacement}
          yAxisPlacement={robotYAxisPlacement}
          robotDirection={robotDirection}
          isPosition={isPosition}
        />
      </div>
      <div className="commands">
        <Controls
          onReportRobotPosition={handleReportRobotPosition}
          onChangeRobotMovement={handleRobotMovement}
          onChangeMovementToLeft={handleChangeMovementToLeft}
          onChangeMovementToRight={handleChangeMovementToRight}
        />
        <RobotPlacement onRobotPlacement={handleRobotPlacement} />
      </div>
    </div>
  );
};

export default RobotCodingChallenge;
