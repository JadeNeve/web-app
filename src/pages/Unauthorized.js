import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

export default function Unauthorized() {
const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 25,
            pb: 6,
          }}
        >
          <Container maxWidth="md">
          <Typography
              component="h1"
              variant="h1"
              align="center"
              color="#1976d2"
              fontWeight="bold"
              gutterBottom
            >
              401
            </Typography>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              fontWeight="bold"
              gutterBottom
            >
              No Authorization Found
            </Typography>
            <Typography align="center" color="text.secondary" paragraph>
              This page is not publically available. To access it please login first.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" onClick={() => navigate('/login')}>LOGIN TO CONTINUE</Button>
            </Stack>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}