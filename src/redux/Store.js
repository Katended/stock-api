import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './home/homeSlice';
import currencyRatesReducer from './home/currencyRatesSlice';

const Store = configureStore({
  reducer: {
    homeStore: homeReducer,
    currencyRatesStore: currencyRatesReducer,
  },
});

export default Store;
