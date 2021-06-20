import React from 'react';
import {
  Link
} from "react-router-dom";
import { themed } from '../HOC/themed'

const Header = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <div className={classes.hamburgerMenu}>
        MenuHamburguer
      </div>
      <div className={classes.nameContainer}>
        Torneum Maximus
      </div>
      <div className={classes.links}>
        <Link to="/">Home</Link>
        <Link to="/tournaments">Tournaments</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className={classes.signInContainer}>
        Sign In/Out
      </div>
    </div>
  )
}

export default themed('components.Header', Header);
