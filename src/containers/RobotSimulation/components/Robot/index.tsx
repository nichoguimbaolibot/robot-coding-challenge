import React, { useEffect } from 'react';
import { IRobotProps } from './interface';

const Robot: React.FunctionComponent<IRobotProps> = ({
  xAxisPlacement,
  yAxisPlacement,
  robotDirection,
  isPosition,
}): JSX.Element => {
  useEffect(() => {
    const robot = document.getElementById('robot');
    if (!isPosition) {
      robot.style.display = 'none';
      return;
    }
    const xAxisCalculation = xAxisPlacement * 140 + 70;
    const yAxisCalculation = -yAxisPlacement * 143 + 623;

    const robotMovementCoordinates = `translate(${xAxisCalculation}px,${yAxisCalculation}px) rotate(${robotDirection}deg)`;

    robot.style.display = 'block';
    robot.style.transform = robotMovementCoordinates;
  }, [xAxisPlacement, yAxisPlacement, robotDirection, isPosition]);

  return <section className="robot-section" id="robot" />;
};

export default Robot;
