import symbolReducer from '../redux/home/homeSlice';

describe('Home slice', () => {
  it('should handle fetch data from  and API ', () => {
    const initialState = {
      symbols: [],
      isLoading: false,
      error: '',
    };

    const action = { type: 'home/fetchSymbols' };

    const nextState = symbolReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });
});
