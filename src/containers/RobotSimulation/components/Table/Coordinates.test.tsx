import React from 'react';

import { configure, shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { MAXIMUM_ROW_BOXES } from 'constant/app';

import Coordinates from './Coordinates';

configure({ adapter: new EnzymeAdapter() });

describe('LETS TEST COORDINATE LABEL', () => {
  let firstTestWrapper: any;

  beforeEach(() => {
    firstTestWrapper = shallow(<Coordinates rowBoxes={MAXIMUM_ROW_BOXES} />);
  });

  it(`Render COORDINATE LABEL base on MAXIMUM_ROW_BOXES ${MAXIMUM_ROW_BOXES}`, (): void => {
    expect(firstTestWrapper.find('.coordinate-label')).toHaveLength(
      MAXIMUM_ROW_BOXES,
    );
  });
});
