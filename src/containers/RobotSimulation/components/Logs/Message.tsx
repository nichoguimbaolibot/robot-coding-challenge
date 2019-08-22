import React from 'react';

import { NORTH, EAST, SOUTH, WEST } from 'constant/cardinalDirection';
import {
  isCardinalPositionNorth,
  isCardinalPositionEast,
  isCardinalPositionSouth,
  isCardinalPositionWest,
} from 'utils/validatePosition';

interface IMessageProps {
  robotXAxisPlacement: number;
  robotYAxisPlacement: number;
  robotDirection: number;
}

const Message: React.FunctionComponent<IMessageProps> = ({
  robotXAxisPlacement,
  robotYAxisPlacement,
  robotDirection,
}): JSX.Element => {
  const validateDirection = (position: number): string => {
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

  return (
    <span className="message">
      <span className="intro"> Robot Movement </span>

      <span className="x-axis-position">X: {robotXAxisPlacement}</span>

      <span className="y-axis-position">Y: {robotYAxisPlacement}</span>

      <span className="robot-direction">
        DIRECTION: {validateDirection(robotDirection)}
      </span>
    </span>
  );
};

export default Message;
