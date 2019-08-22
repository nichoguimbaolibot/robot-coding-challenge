import React from 'react';
import { configure, shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import RobotPlacement from '.';

configure({ adapter: new EnzymeAdapter() });

describe('LETS TEST RobotPlacement Component', () => {
  let RobotPlacementWrapper: any;

  const onRobotPlacement = sinon.spy();

  beforeEach(() => {
    RobotPlacementWrapper = shallow(
      <RobotPlacement onRobotPlacement={onRobotPlacement} />,
    );
  });

  it('should have input position x', () => {
    expect(RobotPlacementWrapper.find('#input-xAxis')).toHaveLength(1);
  });

  it('should have input position y', () => {
    expect(RobotPlacementWrapper.find('#input-yAxis')).toHaveLength(1);
  });

  it('should have selected position', () => {
    expect(RobotPlacementWrapper.find('#select-position')).toHaveLength(1);
  });

  it('should have place robot button', () => {
    expect(RobotPlacementWrapper.find('.place-robot-btn')).toHaveLength(1);
  });

  it('should Cardinal Direction select must has 4 option', () => {
    expect(RobotPlacementWrapper.find('.cardinal-option-value')).toHaveLength(
      4,
    );
  });

  it('Should click Place button', () => {
    RobotPlacementWrapper.find('.place-robot-btn').simulate('click');
    expect(onRobotPlacement).toHaveProperty('callCount', 1);
  });
});
