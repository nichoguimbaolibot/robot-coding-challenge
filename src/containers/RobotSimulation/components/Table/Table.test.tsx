import React from 'react';
import { configure, shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { MAXIMUM_ROW_BOXES } from 'constant/app';
import Box from '../Box';
import Table from '.';

configure({ adapter: new EnzymeAdapter() });

describe('LETS TEST TABLE BOX COMPONENT', () => {
  let firstTestWrapper: any;
  let secondTestWrapper: any;

  beforeEach(() => {
    firstTestWrapper = shallow(<Table rowBoxes={MAXIMUM_ROW_BOXES} />);
  });

  it(`Render Box Component base on MAXIMUM_ROW_BOXES ${MAXIMUM_ROW_BOXES}`, () => {
    expect(firstTestWrapper.find(Box)).toHaveLength(MAXIMUM_ROW_BOXES);
  });

  beforeEach(() => {
    secondTestWrapper = shallow(<Table />);
  });

  it(`Render Box Default 5 if no MAXIMUM_ROW_BOXES props pass`, () => {
    expect(secondTestWrapper.find(Box)).toHaveLength(5);
  });
});
