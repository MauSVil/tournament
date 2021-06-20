import React from 'react';
import { themed } from '../HOC/themed'

const Home = (props) => {
  const { classes } = props

  return (
    <div className={classes.root}>
      Im in Homeeeeeeeeeee
    </div>
  )
}

export default themed('pages.Home', Home);
