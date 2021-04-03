import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Page from './components/Page';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#414042',
    },
    secondary: {
      main: '#f37037',
    },
  },
});

function App() {
  return (
    <div>
      <CssBaseline />

      <Router>
        <ThemeProvider theme={theme}>
          <Container maxWidth="lg">
            <Page />
          </Container>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
