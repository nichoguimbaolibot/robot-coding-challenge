import { ROBOT_MOVEMENT } from 'constant/robotMovement';

export const robotCalculation = {
  getXAxisMovement: (xAxis: number): number => {
    const computeXAxis =
      xAxis * ROBOT_MOVEMENT.DEFAULT_X_AXIS_MOVEMENT +
      ROBOT_MOVEMENT.DEFAULT_X_AXIS_POSITION;
    return computeXAxis;
  },
  getYAxisMovement: (yAxis: number): number => {
    const computeYAxis =
      -yAxis * ROBOT_MOVEMENT.DEFAULT_Y_AXIS_MOVEMENT +
      ROBOT_MOVEMENT.DEFAULT_Y_AXIS_POSITION;
    return computeYAxis;
  },
};
