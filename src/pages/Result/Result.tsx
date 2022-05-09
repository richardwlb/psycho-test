import { CssBaseline, Box, Typography, Container } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from '../../app/hooks';
import { infoState } from '../LandingPage/LandingPageSlice';

import mockData from '../../mockData/db.json';

export default function Result() {
  const [typeResult, setTypeResult] = useState<string>('');
  const [descRestult, setDescResult] = useState<string>('');
  const [titleRestult, setTitleResult] = useState<string>('');
  const infoQuestions = useAppSelector(infoState);
  const navigate = useNavigate();

  useEffect(() => {
    if (!infoQuestions.name) {
      navigate('/');
    }
    calculatePoints();
  });

  const calculatePoints = () => {
    const total = infoQuestions.questions.reduce((total, next) => {
      return total + next.answer;
    }, 0);

    if (total > 8) {
      setTypeResult('extrovert');
    } else {
      setTypeResult('introvert');
    }

    const result = mockData.results.find(
      (result) => result.type === typeResult
    );

    setDescResult(result?.description || '');
    setTitleResult(result?.title || '');
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 10,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography component="h1" variant="h6">
          {`${infoQuestions.name}. ${titleRestult}`}
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Typography sx={{ mt: 2 }} component="p" variant="body1">
            {descRestult}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
