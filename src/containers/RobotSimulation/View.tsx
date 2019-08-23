import React, { FunctionComponent, useState } from 'react';
import { Howl } from 'howler';
import Notification from 'antd/lib/notification';
import MESSAGES from 'constant/message';
import {
  isCardinalDirectionNorth,
  isCardinalDirectionEast,
  isCardinalDirectionSouth,
  isCardinalDirectionWest,
} from 'utils/validatePosition';
import { NORTH, EAST, SOUTH, WEST } from 'constant/cardinalDirection';
import { generateUniqueId } from 'utils/generateUniqueId';
import Controls from './components/Controls';
import RobotPlacement from './components/RobotPlacement';
import Robot from './components/Robot';
import Table from './components/Table';

import { MAX_BOXES } from 'constant/app';

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
  ): void => {
    if (xAxis < 0 || xAxis > 4 || yAxis < 0 || yAxis > 4) {
      showErrorNotificationMessage(MESSAGES.INVALID_POSITION);
      return;
    } else {
      robotPlacementSounds();
      setPosition(true);
      setRobotDirection(cardinalDirection);
      setRobotXAxisPlacement(xAxis);
      setRobotYAxisPlacement(yAxis);
      handleUpdateReport(cardinalDirection, yAxis, xAxis);
    }
  };

  const handleRobotMovement = (): void => {
    if (!isPosition) {
      showErrorNotificationMessage(MESSAGES.ROBOT_NOT_FOUND);
      return;
    }
    const currentDirection = robotDirection % 360;
    let xAxisPlacement = robotXAxisPlacement;
    let yAxisPlacement = robotYAxisPlacement;
    if (isCardinalDirectionNorth(currentDirection)) {
      yAxisPlacement = yAxisPlacement + 1;
    }

    if (isCardinalDirectionEast(currentDirection)) {
      xAxisPlacement = xAxisPlacement + 1;
    }

    if (isCardinalDirectionSouth(currentDirection)) {
      yAxisPlacement = yAxisPlacement - 1;
    }

    if (isCardinalDirectionWest(currentDirection)) {
      xAxisPlacement = xAxisPlacement - 1;
    }

    if (
      xAxisPlacement < 0 ||
      xAxisPlacement > 4 ||
      yAxisPlacement < 0 ||
      yAxisPlacement > 4
    ) {
      showErrorNotificationMessage(MESSAGES.MOVEMENT_NOT_ALLOWED);
      return;
    } else {
      robotMovementSound();
      setRobotXAxisPlacement(xAxisPlacement);
      setRobotYAxisPlacement(yAxisPlacement);
      handleUpdateReport(currentDirection, yAxisPlacement, xAxisPlacement);
    }
  };

  const handleChangeMovementToLeft = (): void => {
    if (!isPosition) {
      showErrorNotificationMessage(MESSAGES.ROBOT_NOT_FOUND);
      return;
    }
    const nextDirection = robotDirection - 90;
    robotRotateSound();
    setRobotDirection(nextDirection);
  };

  const handleChangeMovementToRight = (): void => {
    if (!isPosition) {
      showErrorNotificationMessage(MESSAGES.ROBOT_NOT_FOUND);
      return;
    }
    const nextDirection = robotDirection + 90;
    robotRotateSound();
    setRobotDirection(nextDirection);
  };

  const validateDirection = (position: number): string => {
    if (isCardinalDirectionNorth(position)) {
      return NORTH;
    } else if (isCardinalDirectionEast(position)) {
      return EAST;
    } else if (isCardinalDirectionSouth(position)) {
      return SOUTH;
    } else if (isCardinalDirectionWest(position)) {
      return WEST;
    }

    return 'INVALID FACE POSITION';
  };

  const handleUpdateReport = (
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

  const showErrorNotificationMessage = (message: string): void => {
    Notification.error({
      placement: 'bottomRight',
      message: 'Err...',
      description: message,
    });
    errorNoSound();
  };

  const handleReportRobotPosition = (): void => {
    if (!isPosition) {
      Notification.success({
        placement: 'bottomRight',
        message: 'Report Position',
        description: MESSAGES.ROBOT_NOT_FOUND,
      });
      return;
    }
    const message = `X-Axis: ${report.robotXAxisPlacement} Y:Axis: ${
      report.robotYAxisPlacement
    } Cardinal Direction: ${validateDirection(report.robotDirection)}`;
    Notification.success({
      placement: 'bottomRight',
      message: 'Report Position',
      description: message,
    });
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
        <Table rowBoxes={MAX_BOXES} />

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
