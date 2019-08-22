import React from 'react';
import { configure, shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { MAXIMUM_ROW_BOXES } from 'constant/app';
import Box from '.';

configure({ adapter: new EnzymeAdapter() });

describe('LETS TEST BOX COMPONENT', () => {
  let BoxWrapper: any;

  beforeEach(() => {
    BoxWrapper = shallow(<Box rowBoxes={MAXIMUM_ROW_BOXES} />);
  });

  it(`Render SQUARE BOX base on MAXIMUM_ROW_BOXES ${MAXIMUM_ROW_BOXES}`, () => {
    expect(BoxWrapper.find('.box')).toHaveLength(MAXIMUM_ROW_BOXES);
  });
});
