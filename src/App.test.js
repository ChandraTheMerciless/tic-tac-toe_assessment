import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/Game/Game';
// import { render } from '@testing-library/react';

import App from './App';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

describe('<App />', () => {
  it('contains a <Game /> component', () => {
    const wrapper = mount(<App/>);
    expect(wrapper.find(Game)).to.have.length(1);
  });
});
// NOTE: come back to this later
// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
