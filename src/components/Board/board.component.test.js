import React from 'react';
import Board from './board.component';
import Square from '../Square/square.component';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';
import { expect } from 'chai';

configure({ adapter: new Adapter() });

describe('<Board />', () => {
  it('contains a <Square /> component', () => {
    const wrapper = mount(<Board/>);
    expect(wrapper.find(Square)).to.have.length(6);
  });
});