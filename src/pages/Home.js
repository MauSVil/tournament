import React, { useEffect, useState } from 'react';
import { themed } from '../HOC/themed'
import { connect } from 'react-redux'
import { Bracket, RoundProps } from 'react-brackets';
import HomeSection from '../components/HomeSection/HomeSection';
import axios from 'axios';
import LandingPage from './LandingPage'
import sections from '../data/HomeData';
import { setUserInfo as setUserInfoAction } from '../redux/actions/ui'
import { useHistory } from 'react-router';
import envJSON from '../env.variables.json';

const node_env = process.env.NODE_ENV || 'development';
const envVariables = envJSON[node_env];

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
  const { setUserInfo } = props;
  const [open, setOpen] = useState(true)

  const history = useHistory();

  const fetchUserInfo = async () => {
    try {
      const { data: { data }} = await axios.get(`${envVariables.SERVERURL}/api/user`,
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        }
      );
      setUserInfo(data[0])
    } catch (error) {
      setUserInfo({})
      history.push('/login')
    }
  }

  useEffect(() => {
    fetchUserInfo();
  }, [])

  return (
    <div>
      <LandingPage open={open} setOpen={setOpen} />
      {/* <HomeSection {...section1} /> */}
      <Bracket rounds={rounds} />
    </div>
  )
}

const mapDispatchToProps = {
  setUserInfo: setUserInfoAction,
}

export default connect(null, mapDispatchToProps)(Home);
