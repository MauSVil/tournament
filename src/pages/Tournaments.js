import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Text from '../components/Text/Text';
import Button from '../components/Button/Button';
import axios from 'axios';
import './Tournaments.css'
import Tournament from '../components/Tournament/Tournament';

const Tournaments = () => {
  const [tournaments, setTournaments] = useState([]);

  const history = useHistory();

  const getTournaments = async () => {
    try {
      const { data } = await axios.get('http://localhost:7000/api/tournaments',
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        }
      );
      setTournaments(data)
    } catch (error) {
      history.push('/login')
    }
  }

  useEffect(() => {
    getTournaments();
  }, [])

  const tourns = [
    {
      name: 'Tournament 1',
      id: 1,
      cost: 100,
      type: '1v1',
      roleIn: 10,
      expertise: 'rookie'
    },
    {
      name: 'Tournament 2',
      id: 2,
      cost: 100,
      type: '1v1',
      roleIn: 10,
      expertise: 'rookie'
    },
    {
      name: 'Tournament 3',
      id: 3,
      cost: 100,
      type: '1v1',
      roleIn: 10,
      expertise: 'rookie'
    },
    {
      name: 'Tournament 4',
      id: 4,
      cost: 100,
      type: '1v1',
      roleIn: 10,
      expertise: 'rookie'
    }
  ]

  const handleTournamentClick = (id) => {
    history.push(`/tournament/${id}`)
  }

  return (
    <div className="tournaments-root">
      <div className="tournaments-container">
        {tourns.map((el) => {
          return (
            <Tournament tournament={el} onClick={() => handleTournamentClick(el.id)}/>
          )
        })}
      </div>
    </div>
  )
};

export default Tournaments;
