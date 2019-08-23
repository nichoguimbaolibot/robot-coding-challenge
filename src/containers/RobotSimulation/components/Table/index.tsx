import React, { FunctionComponent } from 'react';
import Box from '../Box';
import Coordinates from './Coordinates';
import { ITable } from './interface';

const Table: FunctionComponent<ITable> = ({ rowBoxes }): JSX.Element => {
  const boxes = rowBoxes ? rowBoxes : 5;

  return (
    <div className="table-box-section">
      <div className="table-item">
        <div className="vertical-coordinates">
          <Coordinates rowBoxes={boxes} block />
        </div>
        <div className="box-generator">
          {Array(boxes)
            .fill(Math.random())
            .map((box: number, index: number) => (
              <Box key={index} rowBoxes={boxes} />
            ))}
          <Coordinates rowBoxes={boxes} />
        </div>
      </div>
    </div>
  );
};
export default Table;
