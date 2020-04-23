import React from 'react';
import Status from '../Status/status.component';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';
import { expect } from 'chai';

configure({ adapter: new Adapter() });

describe('<State />', () => {
  it('sets text props', () => {
    const wrapper = mount(<Status isWinner={true} player='X' />);
    const statusEl = wrapper.find('.status-container').first();
    expect(statusEl.text()).to.equal('The winner is X!');
  });
  it('sets disabled props', () => {
    const wrapper = mount(<Status isWinner={false} player='O' />);
    const statusEl = wrapper.find('.status-container').first();
    expect(statusEl.text()).to.equal('The next player is O');
  });
});