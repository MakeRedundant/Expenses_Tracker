import React, { useEffect, useRef } from 'react';
import { Grid } from "@material-ui/core";
import Details from "./components/Details/Details";
import useStyles from "./styles";
import Main from './components/Main/Main';

const App = () => {
  const classes = useStyles();
  const main = useRef(null);

  const executeScroll = () => main.current.scrollIntoView();    

  useEffect(() => {
    executeScroll();
  }, []);

  return (
    <div>
      <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{ height: '100vh'}} >
        <Grid item xs={12} sm={4} className={classes.mobile} >
          <Details title="Income" />
        </Grid>
        <Grid ref={main} item xs={12} sm={3} >
          <Main />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.desktop} >
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.last} >
          <Details title="Expense" />
        </Grid>
      </Grid>
    </div>
  )
}

export default App;
