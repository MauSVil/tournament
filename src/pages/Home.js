import React, { useState } from 'react';
import { themed } from '../HOC/themed'
import { Bracket, RoundProps } from 'react-brackets';
import HomeSection from '../components/HomeSection/HomeSection'
import LandingPage from './LandingPage'
import sections from '../data/HomeData'

const { section1 } = sections;

const rounds: RoundProps[] = [
  {
    title: 'Round one',
    seeds: [
      {
        id: 1,
        date: new Date().toDateString(),
        teams: [{ name: 'Team A' }, { name: 'Team B' }],
      },
      {
        id: 2,
        date: new Date().toDateString(),
        teams: [{ name: 'Team C' }, { name: 'Team D' }],
      },
    ],
  },
  {
    title: 'Round one',
    seeds: [
      {
        id: 3,
        date: new Date().toDateString(),
        teams: [{ name: 'Team A' }, { name: 'Team C' }],
      },
    ],
  },
];

const Home = (props) => {
  const { classes } = props;
  const [open, setOpen] = useState(true)

  return (
    <div>
      <LandingPage open={open} setOpen={setOpen} />
      {/* <HomeSection {...section1} /> */}
      <Bracket rounds={rounds} />
    </div>
  )
}

export default themed('pages.Home', Home);
