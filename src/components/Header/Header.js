import React from 'react';
import {
  Link
} from "react-router-dom";
import { themed } from '../../HOC/themed'
import Text from '../Text/Text'
import Button from '../Button/Button'
import './Header.css'

const Header = (props) => {
  const { classes } = props;

  return (
    <div className="header-root">
      {/* <div className={classes.hamburgerMenu}>
        MenuHamburguer
      </div> */}
      <div className={classes.nameContainer}>
        <Text variant="h1">Torneum Maximus</Text>
      </div>
      <div className={classes.links}>
        <Link to="/" className="header-link">
          <Text textSize="text--medium">Home</Text>
        </Link>
        <Link to="/tournaments" className="header-link">
          <Text textSize="text--medium">Tournaments</Text>
        </Link>
        <Link to="/contact" className="header-link">
          <Text textSize="text--medium">Contact</Text>
        </Link>
      </div>
      <div className={classes.signInContainer}>
        <Button styleClass="btn--outline">
          <Text>Sign Up</Text>
        </Button>
      </div>
    </div>
  )
}

export default themed('components.Header', Header);
