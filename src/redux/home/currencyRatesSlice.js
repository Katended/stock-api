import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  rates: [],
  isLoading: false,
  error: '',
};

export const fetchCurrencyRates = createAsyncThunk(
  'home/fetchCurrencyRates',
  async (id, thunkAPI) => {
    const response = await fetch(`https://api.vatcomply.com/rates?base=${id}`)
      .catch((error) => thunkAPI.rejectWithValue('An error occurred while fetching the data', error));
    return response.json();
  },
);

const CurrencyRatesSlice = createSlice({
  name: 'rates',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCurrencyRates.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchCurrencyRates.fulfilled, (state, action) => {
      state.isLoading = false;

      let newState = [];
      state.error = '';
      newState = action.payload.rates;

      const newState2 = Object.keys(newState).map((key) => ({
        date: action.payload.date,
        base: key,
        value: action.payload.rates[key],
        key,
      }));

      state.rates = newState2;
    });
  },
});

export default CurrencyRatesSlice.reducer;
