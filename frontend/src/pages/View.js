import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function View() {
    return (
      <Grid container justifyContent="center">
      <Grid item>
        <p>Welcome to view page</p>
      <Stack sx={{ pt: 1 }} direction="row" spacing={1} justifyContent="center">
        <Button href="/" variant="contained">
          {"Go Home"}
        </Button>
        <Button href="/entry" variant="contained">
          {"Enter More Data"}
        </Button>
      </Stack>
      </Grid>
    </Grid>
  );
}

export default View;