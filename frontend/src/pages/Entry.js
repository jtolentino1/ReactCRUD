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
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';

import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

import { Fields } from '../data/Fields';
import { Locations } from '../data/Locations';
import { Alert } from '@mui/material';

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

function getStyles(a, b, theme) {
  return {
    fontWeight:
      b.indexOf(a) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
  };
}

export default function Entry() {
  const navigate = useNavigate();
  const theme = useTheme();

  const [location, setLocation] = React.useState("");
  const [field, setField] = React.useState([]);

  const [showErrorMessage, setShowErrorMessage] = React.useState(false);
  const [firstNameError, setFirstNameError] = React.useState(false);
  const [lastNameError, setLastNameError] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);
  const [locationError, setLocationError] = React.useState(false);
  const [fieldError, setFieldError] = React.useState(false);

  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  };

  const handleChangeChip = (event) => {
    const {
      target: { value },
    } = event;
    setField(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  // fundtion to check if firstName, lastName, email, location, and field are not empty
  const checkForm = () => {
    let temp = {}
    if (document.getElementById("firstName").value === "") {
      temp.firstName = false
      setFirstNameError(true);
    } else {
      setFirstNameError(false);
    }
    if (document.getElementById("lastName").value === "") {
      temp.lastName = false
      setLastNameError(true);
    } else {
      setLastNameError(false);
    }
    if (document.getElementById("email").value === "") {
      temp.email = false
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (location === "") {
      temp.location = false
      setLocationError(true);
    } else {
      setLocationError(false);
    }
    if (field.length === 0) {
      temp.field = false
      setFieldError(true);
    } else {
      setFieldError(false);
    }
    // return true if every value in temp is true
    return Object.values(temp).every(x => x === true);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if(checkForm()) {
      console.log(JSON.stringify(Object.fromEntries(data.entries())));
      navigate('/submitted');
    } else {
      setShowErrorMessage(true);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Grid container justifyContent="center" alignItems="center" direction="column" style={{minHeight:"100vh"}}>
        <Box sx={{marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
          <Typography component="h1" variant="h5">
            Enter Data to Database
          </Typography>
          {showErrorMessage && ( 
          <Alert severity="error" fullWidth sx={{marginTop: 2}}>Please fill out all the required fields before submitting.</Alert>
          )}
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Grid container spacing={2}>
              <Grid item xs={12} sm={5}>
                <TextField margin="normal" name="firstName" required fullWidth id="firstName" label="First Name" error={firstNameError}/>
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField margin="normal" name="middleInit" fullWidth id="firstName" label="Init"/>
              </Grid>
              <Grid item xs={12} sm={5}>
                <TextField margin="normal" required fullWidth id="lastName" label="Last Name" name="lastName" error={lastNameError}/>
              </Grid>       
            </Grid>
          <TextField margin="normal" required fullWidth name="email" label="Email Address" id="email" error={emailError}/>
          <FormControl margin="normal" fullWidth required helperText="" error={locationError} id="location-select" >
            <InputLabel>Current Location</InputLabel>
            <Select label="Current Location" name="location"
              value={location}
              onChange={handleChangeLocation}
              MenuProps={MenuProps}>
              {Locations.map((option) => (
                <MenuItem key={option.value} value={option.value} style={getStyles(option.value, location, theme)}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl margin="normal" fullWidth required helperText="" error={fieldError} id="interests-chip">
            <InputLabel>Interest(s)</InputLabel>
            <Select label="Interest(s)" name="interests"
              multiple value={field}
              onChange={handleChangeChip}
              input={<OutlinedInput id="interests" label="Interest(s)" />}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
                  {selected.map((value) => (
                    <Chip key={value} label={value}/>
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}>
              {Fields.map((name) => (
                <MenuItem key={name} value={name} style={getStyles(name, field, theme)}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Submit
            </Button>
            <Grid container justifyContent="center">
              <Grid item sx={{mb: 5}}>
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