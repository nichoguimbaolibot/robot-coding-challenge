export interface IRobot {
  isPosition: boolean;
  recordedMovements: IRecordedMovements[];
  robotDirection: number;
  robotXAxisPlacement: number;
  robotYAxisPlacement: number;
  type: string;
}

export interface IRecordedMovements {
  robotDirection: number;
  id: number;
  robotXAxisPlacement: number;
  time: Date;
  robotYAxisPlacement: number;
  type: string;
}
