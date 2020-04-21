import React from 'react';
import Game from './game.component';
import Board from '../Board/board.component';
import Status from '../Status/status.component';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';
import { expect } from 'chai';

configure({ adapter: new Adapter() });

describe('<Game />', () => {
  beforeEach(() => {
    
  });

  it('contains a <Board /> component', () => {
    const wrapper = mount(<Game/>);
    expect(wrapper.find(Board)).to.have.length(1);
  });

  it('contains a <Status /> component', () => {
    const wrapper = mount(<Game/>);
    expect(wrapper.containsMatchingElement(<Status />)).to.equal(true);
  });

  it('contains 9 squares in the state', () => {
    const wrapper = mount(<Game />);
    expect(wrapper.state('squares').length).to.equal(9);
  });

  it('contains squares in the state that are set to have certain properties on load', () => {
    const wrapper = mount(<Game />);
    expect(wrapper.state('squares')[0].text).to.equal('');
    // expect(wrapper.state('squares')[0].handleClick).to.equal(wrapper.handleClick);
    expect(wrapper.state('squares')[5].id).to.equal(5);
  });

  it('sets the square text to X if it is clicked', () => {
    const wrapper = mount(<Game />);
    expect(wrapper.state('squares')[0].text).to.equal('');
    wrapper.find('button').first().simulate('click');
    expect(wrapper.state('squares')[0].text).to.equal('X');
  });

  it('sets the next player to O if a square is clicked an odd number of times', () => {
    const wrapper = mount(<Game />);
    wrapper.find('button').first().simulate('click');
    expect(wrapper.state('nextPlayer')).to.equal('O');
  })
});