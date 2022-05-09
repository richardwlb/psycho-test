import * as React from 'react';
import {
  Button,
  CssBaseline,
  Box,
  Typography,
  Container,
  Snackbar,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import Alternative from '../../components/Alternative';
import {
  infoState,
  TQuestion,
  updateAnswer,
  updateState,
} from '../LandingPage/LandingPageSlice';
import DialogScreen from '../../components/DialogScreen';

export default function Question() {
  const infoQuestions = useAppSelector(infoState);
  const [currentQuestion, setCurrentQuestion] = React.useState<TQuestion>();
  const [openDialog, setOpenDialog] = React.useState<boolean>(false);
  const [dialogMessage, setDialogMessage] = React.useState<string>('');
  const [dialogTitle, setDialogTitle] = React.useState<string>('');
  const [isToastError, setIsToastError] = React.useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!infoQuestions.name) {
      navigate('/');
    }
    const actualQuestion = infoQuestions.questions.find(
      (question) => question.id === infoQuestions.currentQuestion
    );

    setCurrentQuestion(actualQuestion);
  }, [infoQuestions]);

  const handleAlternative = (alternativePoints: number) => {
    dispatch(
      updateAnswer({
        questionId: infoQuestions.currentQuestion,
        alternativePoints,
      })
    );
  };

  const handleNextQuestion = () => {
    const currentQuestion = infoQuestions.currentQuestion + 1;

    if (infoQuestions.currentQuestion < 5) {
      dispatch(updateState({ currentQuestion }));
    } else {
      validateQuestions();
    }
  };

  const validateQuestions = () => {
    const emptyAnswer = infoQuestions.questions.filter(
      (question) => question.answer > 0
    ).length;

    if (emptyAnswer < 5) {
      setIsToastError(true);
    } else {
      setDialogTitle('Alert');
      setDialogMessage('Do you like to finish the test?');
      setOpenDialog(true);
    }
  };

  const handlePreviousQuestion = () => {
    const currentQuestion = infoQuestions.currentQuestion - 1;
    dispatch(updateState({ currentQuestion }));
  };

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {`Question ${infoQuestions.currentQuestion}/5`}
        <Typography component="h1" variant="h4">
          {currentQuestion?.title}
        </Typography>
        <Box sx={{ mt: 1 }}>
          {currentQuestion?.alternatives.map((question) => {
            const isSelected =
              question.id === currentQuestion.answer ? true : false;

            return (
              <div
                key={question.id}
                onClick={() => handleAlternative(question.points)}
              >
                <Alternative
                  key={question.id}
                  text={question.alternative}
                  isSelected={isSelected}
                />
              </div>
            );
          })}

          <Box
            sx={{
              display: 'grid',
              columnGap: 3,
              gridTemplateColumns: 'repeat(2, 1fr)',
            }}
          >
            <Button
              disabled={infoQuestions.currentQuestion === 1 ? true : false}
              onClick={handlePreviousQuestion}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Back
            </Button>
            <Button
              onClick={handleNextQuestion}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Next
            </Button>
          </Box>
        </Box>
      </Box>
      <DialogScreen
        open={openDialog}
        cancelAction={() => setOpenDialog(false)}
        confirmAction={() => navigate('/result')}
        message={dialogMessage}
        title={dialogTitle}
      />
      <Snackbar
        open={isToastError}
        autoHideDuration={3000}
        onClose={() => setIsToastError(false)}
        message="Please answer all the questions"
      />
    </Container>
  );
}
