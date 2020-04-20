import React from 'react';
import Game from './components/Game/game.component';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';
import { expect } from 'chai';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('contains a <Game /> component', () => {
    const wrapper = mount(<App/>);
    expect(wrapper.find(Game)).to.have.length(1);
  });
});