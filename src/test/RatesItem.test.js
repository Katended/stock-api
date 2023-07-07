import { render } from '@testing-library/react';
import RatesItem from '../components/RatesItem';

describe('RatesItem', () => {
  it('should render Rates Item', async () => {
    const messages = ['USD'];
    const { queryAllByText } = render(<RatesItem id="USD" value="USD" />);
    messages.forEach((message) => {
      expect(queryAllByText(message)).toBeTruthy();
    });
  });
});
