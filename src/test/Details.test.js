import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Store from '../redux/Store';
import Rates from '../components/Rates';

describe('Rates component', () => {
  it('renders Rates correctly', () => {
    const tree = render(<Provider store={Store}><Router><Rates /></Router></Provider>);
    expect(tree).toMatchSnapshot();
  });
});
