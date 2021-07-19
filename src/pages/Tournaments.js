import React, { useState, useEffect } from 'react';
import Text from '../components/Text/Text';
import axios from 'axios';

const Tournaments = () => {

  const [tournaments, setTournaments] = useState([])

  const getTournaments = async () => {
    const { data } = await axios.get('http://localhost:4000/api/tournaments')
    setTournaments(data)
  }

  useEffect(() => {
    getTournaments();
  }, [])

  console.log(tournaments)

  return (
    <div>
      {tournaments.map((el) => {
        return (
          <div>
            <Text>{el.name}</Text>
          </div>
        )
      })}
    </div>
  )
};

export default Tournaments;
