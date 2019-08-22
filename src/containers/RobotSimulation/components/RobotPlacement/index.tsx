import React, { useState } from 'react';

import Button from 'antd/lib/button';
import Input from 'antd/lib/input';
import Select from 'antd/lib/select';

import {
  CARDINAL_DIRECTION,
  ICardinalDirection,
} from 'constant/cardinalDirection';

interface IRobotPlacement {
  onRobotPlacement: (x: number, y: number, f: number) => void;
}

const { Option } = Select;

const RobotPlacement: React.FunctionComponent<IRobotPlacement> = ({
  onRobotPlacement,
}): JSX.Element => {
  const [robotFaceDirection, setRobotFaceDirection] = useState<number>(0);
  const [robotXAxisPlacement, setRobotXAxisPlacement] = useState<number>(0);
  const [robotYAxisPlacement, setRobotYAxisPlacement] = useState<number>(0);

  const handleOnInputXChange = (
    event: React.FormEvent<HTMLInputElement>,
  ): void => {
    const value = event.currentTarget.value;
    setRobotXAxisPlacement(Number(value));
  };

  const handleYAxisPlacement = (
    event: React.FormEvent<HTMLInputElement>,
  ): void => {
    const value = event.currentTarget.value;
    setRobotYAxisPlacement(Number(value));
  };

  const handleRobotDirection = (
    value: React.FormEvent<HTMLSelectElement>,
  ): void => {
    setRobotFaceDirection(Number(value));
  };

  const handlePlaceCommand = (): void => {
    onRobotPlacement(
      robotXAxisPlacement,
      robotYAxisPlacement,
      robotFaceDirection,
    );
  };

  return (
    <div className="robot-placement-section">
      <h4>Place the Robot on table first</h4>

      <Input
        id="input-xAxis"
        placeholder="x-axis position"
        className="input-xAxis"
        onChange={handleOnInputXChange}
      />

      <Input
        id="input-yAxis"
        placeholder="y-axis position"
        className="input-yAxis"
        onChange={handleYAxisPlacement}
      />

      <Select
        id="select-position"
        className="select-position"
        placeholder="ex. North"
        onChange={handleRobotDirection}
      >
        {CARDINAL_DIRECTION.map((cardinal: ICardinalDirection) => {
          return (
            <Option
              className="cardinal-option-value"
              key={cardinal.id}
              value={cardinal.direction}
            >
              {cardinal.position}
            </Option>
          );
        })}
      </Select>

      <Button
        className="place-robot-btn"
        type="primary"
        onClick={handlePlaceCommand}
      >
        PLACE
      </Button>
    </div>
  );
};

export default RobotPlacement;
