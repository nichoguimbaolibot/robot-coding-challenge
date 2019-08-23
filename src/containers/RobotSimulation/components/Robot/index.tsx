import React, { useEffect } from 'react';
import { IRobotProps } from './interface';
import { robotCalculation } from 'constant/robotMovementCalculation';

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
    const xAxisCalculation = robotCalculation.getXAxisMovement(xAxisPlacement);
    const yAxisCalculation = robotCalculation.getYAxisMovement(yAxisPlacement);

    const robotMovementCoordinates = `translate(${xAxisCalculation}px,${yAxisCalculation}px) rotate(${robotDirection}deg)`;

    style.display = 'block';
    style.transform = robotMovementCoordinates;
  }, [xAxisPlacement, yAxisPlacement, robotDirection, isPosition]);

  return (
    <section data-testid="robot-test" className="robot-section" id="robot" />
  );
};

export default Robot;
