import React from 'react';
import { IRobotMoveLogsProps } from './interface';
import LogMovements from './LogMovements';
import EmptySlate from './EmptySlate';

const RobotMoveLogs: React.FunctionComponent<IRobotMoveLogsProps> = ({
  recordedMovements,
  onRobotPlacement,
}): JSX.Element => {
  const handleRobotPlacement = (): void => {
    onRobotPlacement(0, 0, 0);
  };

  return (
    <section className="logs-section">
      <h2>LOGS</h2>
      <div className="logs-container">
        {recordedMovements.length !== 0 ? (
          <LogMovements recordedMovements={recordedMovements} />
        ) : (
          <EmptySlate onRobotPlacement={handleRobotPlacement} />
        )}
      </div>
    </section>
  );
};

export default RobotMoveLogs;
