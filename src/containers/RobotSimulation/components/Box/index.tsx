import React from 'react';

interface IBox {
  rowBoxes: number;
}

const Box: React.FunctionComponent<IBox> = ({ rowBoxes }): JSX.Element => (
  <div data-testid="box-container-test" className="box-container">
    {Array(rowBoxes)
      .fill(Math.random())
      .map((item: number, index: number) => (
        <div data-testid="box-test" className="box" key={index} />
      ))}
  </div>
);

export default Box;
