import { Switch, Redirect, Link, Route, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import LettersFrequency from '../Tasks/LettersFrequency';
import Timer from '../Tasks/Timer';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function Page() {
  const classes = useStyles();
  const location = useLocation();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={location.pathname} centered>
          <Tab value="/" />
          <Tab
            label="Letters Frequency"
            component={Link}
            to={`/letters-frequency`}
            value={`/letters-frequency`}
          />
          <Tab label="Timer" component={Link} to={`/timer`} value={`/timer`} />
        </Tabs>
      </AppBar>

      <Switch>
        <Redirect exact from="/" to="/letters-frequency" />

        <Route path={`/letters-frequency`}>
          <Box p={3}>
            <LettersFrequency />
          </Box>
        </Route>

        <Route path={`/timer`}>
          <Box p={3}>
            <Timer />
          </Box>
        </Route>
      </Switch>
    </div>
  );
}

export default Page;
