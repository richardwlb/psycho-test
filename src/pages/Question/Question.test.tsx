// import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Question from './Question';
import { render, screen } from '../../utils/test-utils';
import { LandingPageState } from '../LandingPage/LandingPageSlice';

test('renders Question component', () => {
  createComponent();

  expect(screen.getByText('Alterantive 1')).toBeInTheDocument();
});

const createComponent = () => {
  const mock: LandingPageState = {
    name: 'Richard',
    questions: [
      {
        id: 1,
        alternatives: [{ alternative: 'Alterantive 1', id: 1, points: 3 }],
        title: 'title',
        answer: 1,
      },
      {
        id: 2,
        alternatives: [{ alternative: 'Alterantive 2', id: 2, points: 5 }],
        title: 'title',
        answer: 1,
      },
    ],
    currentQuestion: 1,
    result: '',
  };

  return render(<Question />, { preloadedState: { info: mock } });
};
