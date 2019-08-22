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
    const xAxisCalculation = xAxisPlacement * 96 + 49;
    const yAxisCalculation = -yAxisPlacement * 103 + 420;

    const robotMovementCoordinates = `translate(${xAxisCalculation}px,${yAxisCalculation}px) rotate(${robotDirection}deg)`;

    style.display = 'block';
    style.transform = robotMovementCoordinates;
  }, [xAxisPlacement, yAxisPlacement, robotDirection, isPosition]);

  return <section className="robot-section" id="robot" />;
};

export default Robot;
