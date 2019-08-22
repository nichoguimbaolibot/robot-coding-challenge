import React from 'react';

import { configure, shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

configure({ adapter: new EnzymeAdapter() });

import Logs from '.';

describe('LETS TEST BOX COMPONENT EMPTY RECORDS', () => {
  const TestRecords = [] as any;
  let LogsWrapper: any;

  const handleRobotPlacement = (x: number, y: number, f: number) => {
    console.log(f, x, y);
  };

  beforeEach(() => {
    LogsWrapper = shallow(
      <Logs
        recordedMovements={TestRecords}
        onRobotPlacement={handleRobotPlacement}
      />,
    );
  });

  it(`Render Empty slate when no robot move records`, () => {
    expect(LogsWrapper.find('.empty-slate')).toHaveLength(1);
  });

  it(`hide terminal wrapper if no robot move records`, () => {
    expect(LogsWrapper.find('.logs-wrapper')).toHaveLength(0);
  });
});

describe('LETS TEST BOX COMPONENT WITH RECORDS', () => {
  const TestRecords = [
    {
      robotDirection: 4,
      id: 1,
      robotPositionX: 2,
      robotPositionY: 3,
    },
  ] as any;

  let LogsWrapper: any;

  const handleRobotPlacement = (x: number, y: number, f: number) => {
    console.log(f, x, y);
  };

  beforeEach(() => {
    LogsWrapper = shallow(
      <Logs
        recordedMovements={TestRecords}
        onRobotPlacement={handleRobotPlacement}
      />,
    );
  });

  it(`hide empty slate if has records`, () => {
    expect(LogsWrapper.find('.empty-slate')).toHaveLength(0);
  });

  it(`show terminal wrapper if has records`, () => {
    expect(LogsWrapper.find('.logs-wrapper')).toHaveLength(1);
  });
});
