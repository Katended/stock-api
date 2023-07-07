import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import URL from '../API';

const initialState = {
  symbols: [],
  isLoading: false,
  error: '',
};

/* const constructURL = (params) => {
  // Construct the query string
  const queryString = Object.keys(params)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&');
  const url = `${URL.symbolsURL}&${queryString}`;
  return url;
}; */
export const fetchSymbols = createAsyncThunk(
  'home/fetchSymbols',
  async (_, thunkAPI) => {
    const response = await fetch('https://api.vatcomply.com/currencies')
      .catch((error) => thunkAPI.rejectWithValue('An error occurred while fetching the data', error));
    return response.json();
  },
);

const symbolSlice = createSlice({
  name: 'symbols',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchSymbols.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchSymbols.fulfilled, (state, action) => {
      state.isLoading = false;
      const newState = action.payload;
      state.error = '';
      state.symbols = newState;
    });
  },
});

export default symbolSlice.reducer;
