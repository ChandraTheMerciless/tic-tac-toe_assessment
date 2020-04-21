import React from 'react';
import Game from './game.component';
import Board from '../Board/board.component';
import Status from '../Status/status.component';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';
import { expect } from 'chai';

configure({ adapter: new Adapter() });

describe('<Game />', () => {
  it('contains a <Board /> component', () => {
    const wrapper = mount(<Game/>);
    expect(wrapper.find(Board)).to.have.length(1);
  });

  it('contains a <Status /> component', () => {
    const wrapper = mount(<Game/>);
    expect(wrapper.containsMatchingElement(<Status />)).to.equal(true);
  });
});