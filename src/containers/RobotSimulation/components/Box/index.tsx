import React from 'react';

interface IBox {
  rowBoxes: number;
}

const Box: React.FunctionComponent<IBox> = ({ rowBoxes }): JSX.Element => (
  <div className="box-container">
    {Array(rowBoxes)
      .fill(Math.random())
      .map((box: number, index: number) => (
        <div className="box" key={index}>
          <div className="art" />
        </div>
      ))}
  </div>
);

export default Box;
