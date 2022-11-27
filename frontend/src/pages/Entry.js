import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Chip from '@mui/material/Chip';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';

import { createTheme, ThemeProvider } from '@mui/material/styles';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const theme = createTheme();

const locations = [
  {
    value: 'British Columbia',
    label: 'BC',
  },
  {
    value: 'Alberta',
    label: 'AB',
  },
  {
    value: 'Saskatchewan',
    label: 'SK',
  },
  {
    value: 'Manitoba',
    label: 'MB',
  },
  {
    value: 'Ontario',
    label: 'ON',
  },
  {
    value: 'Quebec',
    label: 'QC',
  },
  {
    value: 'New Brunswick',
    label: 'NB',
  },
  {
    value: 'Nova Scotia',
    label: 'NS',
  },
  {
    value: 'Prince Edward Island',
    label: 'PE',
  },
  {
    value: 'Newfoundland and Labrador',
    label: 'NL',
  },
  {
    value: 'Northwest Territories',
    label: 'NT',
  },
  {
    value: 'Nunavut',
    label: 'NU',
  },
  {
    value: 'Yukon',
    label: 'YT',
  },
];

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

export default function Entry() {
  const [location, setLocation] = React.useState('Alberta');

  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  };

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChangeChip = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      location: data.get('location'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Grid container justifyContent="center" alignItems="center" direction="column" style={{minHeight:"100vh"}}>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Enter Data to Database
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Grid container spacing={2}>
              <Grid item xs={12} sm={5}>
                <TextField
                  margin="normal"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField
                  margin="normal"
                  name="middleInit"
                  fullWidth
                  id="firstName"
                  label="Init"
                />
              </Grid>
              <Grid item xs={12} sm={5}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                />
              </Grid>
              
            </Grid>
            <TextField
              margin="normal"
              required
              fullWidth
              name="email"
              label="Email Address"
              id="email"
            />
            {/* add a drop down menu */}
            <TextField
            margin="normal"
            id="location"
            name="location"
            select
            fullWidth
            label="Current Location"
            value={location}
            onChange={handleChangeLocation}>
            {locations.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <FormControl margin="normal" fullWidth>
        <InputLabel id="demo-multiple-chip-label">Preferred Areas</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          label="Preferred Areas"
          onChange={handleChangeChip}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Enter
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="/view" variant="body2">
                  {"View Database"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        </Grid>

      </Container>
    </ThemeProvider>
  );
}