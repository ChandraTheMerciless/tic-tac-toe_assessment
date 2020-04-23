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
});