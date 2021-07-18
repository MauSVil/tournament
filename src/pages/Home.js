import React from 'react';
import { themed } from '../HOC/themed'
import HomeSection from '../components/HomeSection/HomeSection'
import sections from '../data/HomeData'

const { section1, section2, section3, section4 } = sections;

const Home = (props) => {
  const { classes } = props

  return (
    <div className={classes.root}>
      <HomeSection {...section1} />
      <HomeSection {...section2} />
      <HomeSection {...section3} />
      <HomeSection {...section4} />
    </div>
  )
}

export default themed('pages.Home', Home);
