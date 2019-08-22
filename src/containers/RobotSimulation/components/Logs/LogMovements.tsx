import React, { FunctionComponent } from 'react';
import moment from 'moment';
import { DATE_FORMAT } from 'constant/formats';
import { IRecordedMovements } from '../../interface';
import Message from './Message';
import ErrorMessage from './ErrorMessage';

interface ILogMovements {
  recordedMovements: IRecordedMovements[];
}

const LogMovements: FunctionComponent<ILogMovements> = ({
  recordedMovements,
}): JSX.Element => (
  <div className="logs-wrapper">
    {recordedMovements.map((log: IRecordedMovements) => {
      const hasNoError = log.type === '';
      const time = moment(log.time).format(DATE_FORMAT);
      return (
        <div key={log.id} className="log-content">
          <span className="time">{time}:</span>
          <span className="message">
            {hasNoError ? (
              <Message
                robotXAxisPlacement={log.robotXAxisPlacement}
                robotYAxisPlacement={log.robotYAxisPlacement}
                robotDirection={log.robotDirection}
              />
            ) : (
              <ErrorMessage type={log.type} />
            )}
          </span>
        </div>
      );
    })}
  </div>
);

export default LogMovements;
