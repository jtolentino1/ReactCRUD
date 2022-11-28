import React from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

function Submitted() {
    return (
        <Grid container justifyContent="center" alignItems="center" direction="column" style={{minHeight:"100vh"}}>
        <Grid item>
            <Alert variant="filled" severity="success">
                Thanks for submitting!
            </Alert>
            <Stack sx={{ pt: 1 }} direction="row" spacing={1} justifyContent="center">
            <Button href="/" variant="contained">
                {"Go Home"}
            </Button>
            <Button href="/entry" variant="contained">
                {"Enter More Data"}
            </Button>
            <Button href="/view" variant="contained">
                {"View Database"}
            </Button>
            </Stack>
        </Grid>
      </Grid>
  );
}

export default Submitted;