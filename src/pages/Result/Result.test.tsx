// import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Result from './Result';
import { render, screen } from '../../utils/test-utils';
import { LandingPageState } from '../LandingPage/LandingPageSlice';

test('renders Result Page', () => {
  createComponent();

  expect(
    screen.getByText(
      'Richard. You are more of a public introvert and private extrovert'
    )
  ).toBeInTheDocument();
});

const createComponent = () => {
  const mock: LandingPageState = {
    name: 'Richard',
    questions: [
      { id: 1, alternatives: [], title: 'title', answer: 1 },
      { id: 2, alternatives: [], title: 'title', answer: 2 },
    ],
    currentQuestion: 0,
    result: '',
  };

  return render(<Result />, { preloadedState: { info: mock } });
};
