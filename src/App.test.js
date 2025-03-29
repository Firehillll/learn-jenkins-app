import { render, screen } from '@testing-library/react';
import App from './App';

test('Hilario Jenkins Site', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn Jenkins/i);
  expect(linkElement).toBeInTheDocument();
});
