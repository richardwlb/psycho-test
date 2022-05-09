import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

test('renders landing page', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(
    screen.getByText('Welcome to the Psycho Test, please enter your name')
  ).toBeInTheDocument();
});
