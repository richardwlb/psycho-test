import * as React from 'react';
import {
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
  FormControl,
  Input,
} from '@mui/material';

export default function LandingPage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get('name'),
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Welcome to the Psycho Test, please enter your name
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            sx={{
              marginTop: 15,
              width: 400,
            }}
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Start
          </Button>
          <Input type="checkbox" />
        </Box>
      </Box>
    </Container>
  );
}
