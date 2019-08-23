import { ROBOT_MOVEMENT } from 'constant/robotMovement';

export const robotCalculation = {
  getXAxisMovement: (xAxis: number): number => {
    return (
      xAxis * ROBOT_MOVEMENT.DEFAULT_X_AXIS_MOVEMENT +
      ROBOT_MOVEMENT.DEFAULT_X_AXIS_POSITION
    );
  },
  getYAxisMovement: (yAxis: number): number => {
    return (
      yAxis * ROBOT_MOVEMENT.DEFAULT_X_AXIS_MOVEMENT +
      ROBOT_MOVEMENT.DEFAULT_X_AXIS_POSITION
    );
  },
};
