import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Button from '../components/Button/Button';

const Tournament = () => {
  const [tournamentData, setTournamentData] = useState({})
  const [startTournament, setStartTournament] = useState(false);

  const history = useHistory();
  const { location } = history;
  const { pathname } = location;

  const id = pathname.split('/')[2];

  const getTournament = async (id) => {
    const tournamentInfo = await axios.get('http://localhost:4000/api/tournament', {
      params: { id }
    })
    const { data: { data, error }} = tournamentInfo;
    if (data) {
      setTournamentData(data)
    }
    const dateNow = new Date();
    if (dateNow === data.tournamentDate) {
      setStartTournament(true);
    }
  }

  const handleTournamentClick = async () => {
    const response = await axios.post('http://localhost:4000/api/tournament/signup', {
      tournamentId: id
    }, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
  }

  useEffect(() => {
    getTournament(id)
  }, [])

  return (
    <div>
      {startTournament ? (
        <div>
          Ya empezo el torneo {tournamentData.name}
        </div>
      ) : (
        <div>
          Registrate en {tournamentData.name}
          {tournamentData.usersRegistered}
          <Button styleClass="btn--primary" colorClass="primary" onClick={handleTournamentClick}>Inscribete</Button>
        </div>
      )}
    </div>
  );
}

export default Tournament;