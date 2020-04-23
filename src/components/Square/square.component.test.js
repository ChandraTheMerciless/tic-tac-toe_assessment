import React from 'react';
import Square from '../Square/square.component';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';
import { expect } from 'chai';

configure({ adapter: new Adapter() });

describe('<Square />', () => {
  it('sets props', () => {
    const wrapper = mount(<Square text='fooBar'/>);
    const buttonEl = wrapper.find('button').first();
    expect(buttonEl.text()).to.equal('fooBar');
  });
  it('sets disabled props to false if there is no text', () => {
    const wrapper = mount(<Square text='' />);
    const buttonEl = wrapper.find('button').first();
    expect(buttonEl.prop('disabled')).to.equal(false);
  });
  it('sets disabled props to true if there is text', () => {
    const wrapper = mount(<Square text='X' />);
    const buttonEl = wrapper.find('button').first();
    expect(buttonEl.prop('disabled')).to.equal(true);
  });
});