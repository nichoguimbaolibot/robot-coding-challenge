import React, { useEffect } from 'react';
import { IRobotProps } from './interface';

const Robot: React.FunctionComponent<IRobotProps> = ({
  xAxisPlacement,
  yAxisPlacement,
  robotDirection,
  isPosition,
}): JSX.Element => {
  useEffect(() => {
    const { style } = document.getElementById('robot');
    if (!isPosition) {
      style.display = 'none';
      return;
    }
    const xAxisCalculation = xAxisPlacement * 96 + 470;
    const yAxisCalculation = -yAxisPlacement * 105 + 430;

    const robotMovementCoordinates = `translate(${xAxisCalculation}px,${yAxisCalculation}px) rotate(${robotDirection}deg)`;

    style.display = 'block';
    style.transform = robotMovementCoordinates;
  }, [xAxisPlacement, yAxisPlacement, robotDirection, isPosition]);

  return <section className="robot-section" id="robot" />;
};

export default Robot;
