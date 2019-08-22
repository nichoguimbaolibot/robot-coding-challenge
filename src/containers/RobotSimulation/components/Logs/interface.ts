import { IRecordedMovements } from '../../interface';

export interface IRobotMoveLogsProps {
  recordedMovements: IRecordedMovements[];
  onRobotPlacement: (
    xAxis: number,
    yAxis: number,
    cardinalDirection: number,
  ) => void;
}
