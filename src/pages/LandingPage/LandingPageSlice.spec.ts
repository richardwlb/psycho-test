import landingPageReducer, {
  LandingPageState,
  updateState,
  updateAnswer,
} from './LandingPageSlice';

describe('Info reducer', () => {
  const initialState: LandingPageState = {
    name: '',
    currentQuestion: 0,
    result: '',
    questions: [
      {
        id: 0,
        title: '',
        alternatives: [
          {
            id: 0,
            points: 0,
            alternative: '',
          },
        ],
        answer: 0,
      },
    ],
  };
  it('should handle initial state', () => {
    expect(landingPageReducer(undefined, { type: 'unknown' })).toEqual({
      name: '',
      currentQuestion: 0,
      result: '',
      questions: [
        {
          id: 0,
          title: '',
          alternatives: [
            {
              id: 0,
              points: 0,
              alternative: '',
            },
          ],
          answer: 0,
        },
      ],
    });
  });

  it('should handle updateState', () => {
    const actual = landingPageReducer(
      initialState,
      updateState({ name: 'Richard, a Teamway member' })
    );
    expect(actual.name).toEqual('Richard, a Teamway member');
  });
  it('should handle updateAnswer', () => {
    const actual = landingPageReducer(
      initialState,
      updateAnswer({ questionId: 0, alternativePoints: 3 })
    );
    expect(actual.questions[0].answer).toEqual(3);
  });
});
