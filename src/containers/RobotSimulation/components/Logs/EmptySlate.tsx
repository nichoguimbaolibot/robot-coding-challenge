import React, { FunctionComponent } from 'react';
import Button from 'antd/lib/button';

interface IEmptySlate {
  onRobotPlacement: () => void;
}

const EmptySlate: FunctionComponent<IEmptySlate> = ({
  onRobotPlacement,
}): JSX.Element => (
  <div className="empty-slate">
    <div className="_text-center">
      <h3> NO RECORDS FOUND </h3>
      <Button id="place-button" onClick={onRobotPlacement}>
        Place Robot
      </Button>
    </div>
  </div>
);

export default EmptySlate;
