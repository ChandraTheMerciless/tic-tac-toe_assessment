import React from 'react';
import CustomButton from '../CustomButton/custom-button.component';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';
import { expect } from 'chai';

configure({ adapter: new Adapter() });

describe('<CustomButtom />', () => {
  it('sets text props', () => {
    const wrapper = mount(<CustomButton text='foo'/>);
    const buttonEl = wrapper.find('button').first();
    expect(buttonEl.text()).to.equal('foo');
  });
  it('sets disabled props', () => {
    const wrapper = mount(<CustomButton isDisabled={true}/>);
    const buttonEl = wrapper.find('button').first();
    expect(buttonEl.prop('disabled')).to.equal(true);
  });
});