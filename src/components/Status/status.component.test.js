import React from 'react';
import Status from '../Status/status.component';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';
import { expect } from 'chai';

configure({ adapter: new Adapter() });

describe('<State />', () => {
  let squaresText;
  beforeEach(() => {
    squaresText = [];
  })
  it('sets the proper text if there is a winner', () => {
    const wrapper = mount(<Status winner='X' player='O' squaresText={squaresText} />);
    const statusEl = wrapper.find('.status-container').first();
    expect(statusEl.text()).to.equal('The winner is X!');
  });
  it('sets the proper text is there is no winner', () => {
    squaresText.push('X');
    squaresText.push('');
    const wrapper = mount(<Status winner='' player='O' squaresText={squaresText} />);
    const statusEl = wrapper.find('.status-container').first();
    expect(statusEl.text()).to.equal('The next player is O');
  });

  it('announces a tie if there is no winner and all squares have been filled', () => {
    squaresText.push('X');
    squaresText.push('O');
    const wrapper = mount(<Status winner='' player='O' squaresText={squaresText} />);
    const statusEl = wrapper.find('.status-container').first();
    expect(statusEl.text()).to.equal('The game is tied! Press Restart Game to try again!');
  })
});