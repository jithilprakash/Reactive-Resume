import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    // backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    display:"flex",
    justifyContent:"center",
    flexDirection:"column",
    textAlign: "center"
    
  },
  header:{
    fontSize: "large"
  }
}));

export default function HeaderTitle() {
  const classes = useStyles();

  return( <div className={classes.root}>
      <span className={classes.header} >Ruto-Resume</span>
      {/* {
    "A Product from SimpleTerms."} */}
    </div>);
}
