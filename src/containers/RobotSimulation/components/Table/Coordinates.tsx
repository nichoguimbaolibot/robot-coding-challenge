import React from 'react';
import classnames from 'classnames';
import { ICoordinates } from './interface';

const Coordinates: React.FunctionComponent<ICoordinates> = ({
  rowBoxes,
  block,
}): JSX.Element => {
  const coordinatesClassName = classnames('coordinate-section', {
    '-block': block,
    '-inline': !block,
  });
  return (
    <section className={coordinatesClassName}>
      {Array(rowBoxes)
        .fill(Math.random())
        .map((box: number, index: number) => (
          <span className="coordinate-label" key={index}>
            {index}
          </span>
        ))}
    </section>
  );
};

export default Coordinates;
