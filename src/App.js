import * as React from "react";

import "@fontsource/roboto";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import './App.css';
import { Box } from '@mui/material';

import WorkAlert from "./components/WorkAlert";

function MyApp() {
  return(
    <Box my={10}>
      <WorkAlert />
    </Box>
  )
}

function App() {

  const theme = createTheme({
    palette: {
      mode: 'light',
      text: {
        primary: '#fff',
      },
      background: {
        default: '#fff'
      }
    },
    typography: {
      fontFamily: "Roboto",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <MyApp />
    </ThemeProvider>
  );
}

export default App;
