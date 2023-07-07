import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Store from '../redux/Store';
import Home from '../components/Home';

describe('Home renders correctly', () => {
  it('Home renders correctly', () => {
    const tree = render(<Provider store={Store}><Router><Home /></Router></Provider>);
    expect(tree).toMatchSnapshot();
  });
});
