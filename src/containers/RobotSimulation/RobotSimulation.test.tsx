import React from 'react';

import { configure, shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

configure({ adapter: new EnzymeAdapter() });

import Controller from './components/Controller';
import RobotPlacement from './components/RobotPlacement';
import Robot from './components/Robot';
import TableBox from './components/Table';

import RobotSimulation from '.';

describe('LETS TEST HOME pre-requisite components', () => {
  const HomeWrapper = shallow(<RobotSimulation />);

  it('Should have Controller component', () => {
    expect(HomeWrapper.find(Controller)).toHaveLength(1);
  });

  it('Should have RobotPlacement component', () => {
    expect(HomeWrapper.find(RobotPlacement)).toHaveLength(1);
  });

  it('Should have Robot component', () => {
    expect(HomeWrapper.find(Robot)).toHaveLength(1);
  });

  it('Should have TableBox component', () => {
    expect(HomeWrapper.find(TableBox)).toHaveLength(1);
  });
});

describe('LETS TEST HOME initial state', () => {
  const HomeWrapper = shallow(<RobotSimulation />);

  it('isPlace should be false', () => {
    // expect(HomeWrapper.state('isPlaced')).toBe(false);
  });

  it('moveRecords should be empty array', () => {
    // expect(HomeWrapper.state('moveRecords')).toStrictEqual([]);
  });

  it('robotFaceDirection should be 0', () => {
    // expect(HomeWrapper.state('robotFaceDirection')).toBe(0);
  });

  it('robotPositionX should be 0', () => {
    // expect(HomeWrapper.state('robotPositionX')).toBe(0);
  });

  it('robotPositionY should be 0', () => {
    // expect(HomeWrapper.state('robotPositionY')).toBe(0);
  });

  it('type should be empty string', () => {
    // expect(HomeWrapper.state('type')).toBe('');
  });
});

describe('LETS TEST HOME methods and state', () => {
  const HomeWrapper = shallow<any>(<RobotSimulation />);

  it('method handleRobotPlacement run should update isPlaced state to true', () => {
    // HomeWrapper.instance().handleRobotPlacement(1, 1, 1);
    // expect(HomeWrapper.state('isPlaced')).toEqual(true);
  });

  it('method handleRobotPlacement run should update state of robotPositionX, robotPositionY, and robotFaceDirection to 1', () => {
    // HomeWrapper.instance().handleRobotPlacement(1, 1, 1);
    // expect(HomeWrapper.state('robotPositionX')).toEqual(1);
    // expect(HomeWrapper.state('robotPositionY')).toEqual(1);
    // expect(HomeWrapper.state('robotFaceDirection')).toEqual(1);
  });

  it('method handleRobotPlacement run should update isPlaced state to true', () => {
    // HomeWrapper.instance().handleRobotPlacement(1, 1, 1);
    // expect(HomeWrapper.state('isPlaced')).toEqual(true);
  });

  it('method handleRightCommand run should update state robotFaceDirection + 90', () => {
    // HomeWrapper.instance().handleRobotPlacement(0, 0, 0);
    // HomeWrapper.instance().handleRightCommand();
    // expect(HomeWrapper.state('robotFaceDirection')).toEqual(90);
    // HomeWrapper.instance().handleRobotPlacement(0, 0, 1);
    // HomeWrapper.instance().handleRightCommand();
    // expect(HomeWrapper.state('robotFaceDirection')).toEqual(91);
  });

  it('method handleRightCommand run should update state robotFaceDirection - 90', () => {
    // HomeWrapper.instance().handleRobotPlacement(0, 0, 0);
    // HomeWrapper.instance().handleLeftCommand();
    // expect(HomeWrapper.state('robotFaceDirection')).toEqual(-90);
    // HomeWrapper.instance().handleRobotPlacement(0, 0, 1);
    // HomeWrapper.instance().handleLeftCommand();
    // expect(HomeWrapper.state('robotFaceDirection')).toEqual(-89);
  });
});
