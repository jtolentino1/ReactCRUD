import React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

function Home() {
  let navigate = useNavigate();
  return (
      <ThemeProvider theme={theme}>
      <CssBaseline />
        <Grid container justifyContent="center" alignItems="center" direction="column" style={{minHeight:"100vh"}}>
          <Box sx={{bgcolor: 'background.paper'}}>
            <Container maxWidth="sm">
              <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
                CRUD React App
              </Typography>
              <Typography variant="h5" align="center" color="text.secondary" paragraph>
                Hello and welcome to my simple CRUD React App. 
              </Typography>
              <Typography variant="h6" align="center" color="text.secondary" paragraph>
                Built using React, FastAPI, and MongoDB
              </Typography>
              <Stack sx={{ pt: 1 }} direction="row" spacing={0} justifyContent="center">
                <Button variant="contained" onClick={() => {navigate("/entry")}}>Get Started</Button>
              </Stack>
            </Container>
          </Box>
        </Grid>
    </ThemeProvider>
  );
}

export default Home;
