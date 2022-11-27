import React from 'react';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

function View() {
    return (
        <Grid container justifyContent="center">
        <Grid item>
          <p>Welcome to the View Page</p>
          <Link href="/" variant="body2">
            {"Go Home"}
          </Link>
        </Grid>
      </Grid>
  );
}

export default View;