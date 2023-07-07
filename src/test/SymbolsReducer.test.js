import { fetchSymbols } from '../redux/home/homeSlice';
import Store from '../redux/Store';

describe('counterSlice', () => {
  it('should handle increment and API success actions', () => {
    // Dispatch increment action
    Store.dispatch(fetchSymbols());

    // Get the dispatched actionsq
    const actions = Store.getActions();

    expect(actions[0]).toBeTruthy();
  });
});
