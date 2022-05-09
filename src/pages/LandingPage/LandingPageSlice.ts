import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface LandingPageState {
  name: string;
  currentQuestion: number;
  result: string;
  questions: TQuestion[];
}

export type TQuestion = {
  id: number;
  title: string;
  alternatives: TAlternative[];
  answer: number;
};

export type TAlternative = {
  id: number;
  points: number;
  alternative: string;
};

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

export const LandingPageSlice = createSlice({
  name: 'LandingPage',
  initialState,
  reducers: {
    updateState: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    updateAnswer: (state, action) => {
      const { questionId, alternativePoints } = action.payload;
      state.questions.map((question) => {
        if (question.id === questionId) {
          question.answer = alternativePoints;
        }
      });
    },
  },
});

export const { updateState, updateAnswer } = LandingPageSlice.actions;

export const infoState = (state: RootState) => state.info;

export default LandingPageSlice.reducer;
