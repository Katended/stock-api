import { render } from '@testing-library/react';
import HomeItem from '../components/HomeItem';

describe('RatesItem', () => {
  it('should render Rates Item', async () => {
    const messages = ['USD'];
    const { queryAllByText } = render(<HomeItem id="USD" name="USD" symbol="USD" />);
    messages.forEach((message) => {
      expect(queryAllByText(message)).toBeTruthy();
    });
  });
});
