import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBar';

describe('NavBar renders correctly', () => {
  it('renders correctly', () => {
    const tree = render(<Router><NavBar /></Router>);
    expect(tree).toMatchSnapshot();
  });
});
