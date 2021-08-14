import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Text from '../components/Text/Text';
import Button from '../components/Button/Button';
import axios from 'axios';
import './Tournaments.css'

const Tournaments = () => {
  const [tournaments, setTournaments] = useState([]);

  const history = useHistory();

  const getTournaments = async () => {
    const { data } = await axios.get('http://localhost:4000/api/tournaments')
    setTournaments(data)
  }

  useEffect(() => {
    getTournaments();
  }, [])

  return (
    <div>
      {tournaments.map((el) => {
        return (
          <div className="torunaments-tournament" onClick={() => history.push(`/tournament/${el._id}`)}>
            <Text>{el.name}</Text>
          </div>
        )
      })}
    </div>
  )
};

export default Tournaments;
