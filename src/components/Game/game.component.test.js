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
  });

  it('sets the winner state to an empty string if no squares have been clicked', () => {
    const wrapper = mount(<Game />);
    expect(wrapper.state('winner')).to.equal('');
  });

  it('sets the winner state to an X if a winning condition for X on first row is true', () => {
    const wrapper = mount(<Game />);
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(4).simulate('click');
    wrapper.find('button').at(1).simulate('click');
    wrapper.find('button').at(5).simulate('click');
    wrapper.find('button').at(2).simulate('click');

    expect(wrapper.state('winner')).to.equal('X');
  });

  it('sets the winner state to an O if a winning condition for O on second row is true', () => {
    const wrapper = mount(<Game />);
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(3).simulate('click');
    wrapper.find('button').at(6).simulate('click');
    wrapper.find('button').at(4).simulate('click');
    wrapper.find('button').at(2).simulate('click');
    wrapper.find('button').at(5).simulate('click');

    expect(wrapper.state('winner')).to.equal('O');
  });

  it('sets the winner state to an X if a winning condition for X on last row is true', () => {
    const wrapper = mount(<Game />);
    wrapper.find('button').at(6).simulate('click');
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(7).simulate('click');
    wrapper.find('button').at(4).simulate('click');
    wrapper.find('button').at(8).simulate('click');

    expect(wrapper.state('winner')).to.equal('X');
  });

  it('sets the winner state to an X if a winning condition for X on first column is true', () => {
    const wrapper = mount(<Game />);
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(1).simulate('click');
    wrapper.find('button').at(3).simulate('click');
    wrapper.find('button').at(2).simulate('click');
    wrapper.find('button').at(6).simulate('click');

    expect(wrapper.state('winner')).to.equal('X');
  });


  it('sets the winner state to an X if a winning condition for X on second column is true', () => {
    const wrapper = mount(<Game />);
    wrapper.find('button').at(1).simulate('click');
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(4).simulate('click');
    wrapper.find('button').at(2).simulate('click');
    wrapper.find('button').at(7).simulate('click');

    expect(wrapper.state('winner')).to.equal('X');
  });

  it('sets the winner state to an X if a winning condition for X on third column is true', () => {
    const wrapper = mount(<Game />);
    wrapper.find('button').at(2).simulate('click');
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(5).simulate('click');
    wrapper.find('button').at(1).simulate('click');
    wrapper.find('button').at(8).simulate('click');

    expect(wrapper.state('winner')).to.equal('X');
  });

  it('sets the winner state to an X if a winning condition for X on backward diagonal is true', () => {
    const wrapper = mount(<Game />);
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(3).simulate('click');
    wrapper.find('button').at(4).simulate('click');
    wrapper.find('button').at(1).simulate('click');
    wrapper.find('button').at(7).simulate('click');

    expect(wrapper.state('winner')).to.equal('X');
  });

  it('sets the winner state to an X if a winning condition for X on forward diagonal is true', () => {
    const wrapper = mount(<Game />);
    wrapper.find('button').at(2).simulate('click');
    wrapper.find('button').at(3).simulate('click');
    wrapper.find('button').at(4).simulate('click');
    wrapper.find('button').at(1).simulate('click');
    wrapper.find('button').at(6).simulate('click');

    expect(wrapper.state('winner')).to.equal('X');
  });
});