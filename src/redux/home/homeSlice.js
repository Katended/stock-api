import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  symbols: [],
  isLoading: false,
  error: '',
};

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
