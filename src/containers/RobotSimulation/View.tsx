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
import { generateUniqueId } from 'utils/generateUniqueId';
import Controller from './components/Controller';
import RobotPlacement from './components/RobotPlacement';
import Robot from './components/Robot';
import Table from './components/Table';
import Logs from './components/Logs';

import { MAXIMUM_ROW_BOXES } from 'constant/app';

const RobotCodingChallenge: FunctionComponent = (): JSX.Element => {
  const [robotXAxisPlacement, setRobotXAxisPlacement] = useState(0);
  const [robotYAxisPlacement, setRobotYAxisPlacement] = useState(0);
  const [robotDirection, setRobotDirection] = useState(0);
  const [recordedMovements, setRecordedMovements] = useState([]);
  const [isPosition, setPosition] = useState(false);

  const handleRobotPlacement = (
    xAxis: number,
    yAxis: number,
    f: number,
  ): boolean => {
    const isInvalidPosition = xAxis < 0 || xAxis > 4 || yAxis < 0 || yAxis > 4;
    if (isInvalidPosition) {
      handleShowNotificationMessage(MESSAGES.INVALID_POSITION);
      return false;
    } else {
      robotPlacementSounds();
      setPosition(true);
      setRobotDirection(f);
      setRobotXAxisPlacement(xAxis);
      setRobotYAxisPlacement(yAxis);
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

    handleUpdateRecordedMovements(
      currentDirection,
      yAxisPlacement,
      xAxisPlacement,
      '',
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

  const handleUpdateRecordedMovements = (
    currentDirection: number,
    yAxis: number,
    xAxis: number,
    message: string,
  ): void => {
    const newRecordedMovements = recordedMovements;
    const newMovement = {
      robotDirection: currentDirection,
      id: generateUniqueId(),
      robotXAxisPlacement: xAxis,
      robotYAxisPlacement: yAxis,
      time: new Date(),
      type: message,
    };
    newRecordedMovements.push(newMovement);
    setRecordedMovements(newRecordedMovements);
  };

  const handleShowNotificationMessage = (message: string): void => {
    Notification.warning({
      placement: 'bottomRight',
      message: 'Err...',
      description: message,
    });
    errorNoSound();
    handleUpdateRecordedMovements(null, null, null, message);
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
      <div className="items">
        <div className="item">
          <div className="commands">
            <RobotPlacement onRobotPlacement={handleRobotPlacement} />

            <Controller
              onChangeRobotMovement={handleRobotMovement}
              onChangeMovementToLeft={handleChangeMovementToLeft}
              onChangeMovementToRight={handleChangeMovementToRight}
            />
          </div>
          <div className="table-container">
            <Table rowBoxes={MAXIMUM_ROW_BOXES} />

            <Robot
              xAxisPlacement={robotXAxisPlacement}
              yAxisPlacement={robotYAxisPlacement}
              robotDirection={robotDirection}
              isPosition={isPosition}
            />
          </div>
        </div>
        <div className="item">
          <Logs
            recordedMovements={recordedMovements}
            onRobotPlacement={handleRobotPlacement}
          />
        </div>
      </div>
    </div>
  );
};

export default RobotCodingChallenge;
