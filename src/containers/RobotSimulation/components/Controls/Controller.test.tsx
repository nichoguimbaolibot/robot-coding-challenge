import React from 'react';
import { configure, shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import Controller from '.';

configure({ adapter: new EnzymeAdapter() });

describe('LETS TEST CONTROLLER Component', () => {
  const onChangeMovementToRight = sinon.spy();
  const onChangeMovementToLeft = sinon.spy();
  const onChangeRobotMovement = sinon.spy();
  const onReportRobotPosition = sinon.spy();

  const ControllerWrapper = shallow(
    <Controller
      onReportRobotPosition={onReportRobotPosition}
      onChangeMovementToRight={onChangeMovementToRight}
      onChangeMovementToLeft={onChangeMovementToLeft}
      onChangeRobotMovement={onChangeRobotMovement}
    />,
  );

  it('Should trigger left button', () => {
    ControllerWrapper.find('.left-button').simulate('click');
    expect(onChangeMovementToLeft).toHaveProperty('callCount', 1);
  });

  it('Should trigger right button', () => {
    ControllerWrapper.find('.right-button').simulate('click');
    expect(onChangeMovementToRight).toHaveProperty('callCount', 1);
  });

  it('Should trigger move button', () => {
    ControllerWrapper.find('.move-button').simulate('click');
    expect(onChangeRobotMovement).toHaveProperty('callCount', 1);
  });
});
