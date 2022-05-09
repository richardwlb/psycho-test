import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Alternative from './Alternative';

test('renders Alternative component', () => {
  render(<Alternative text="Text Alternative" isSelected={false} />);

  expect(screen.getByText('Text Alternative')).toBeInTheDocument();
});
