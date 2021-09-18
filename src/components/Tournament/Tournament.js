import React from 'react';
import './Tournament.css'

const Tournament = (props) => {
  const { tournament, onClick } = props;

  const {
    name,
    cost,
    type,
    roleIn,
    expertise
  } = tournament;

  return (
    <div className="tournament-root" onClick={onClick}>
      <p className="tournament-name">{name}</p>
      <p>{cost}</p>
      <p>{type}</p>
      <p>{roleIn}</p>
      <p>{expertise}</p>
      <img src="/static/LogoBY.svg" className="tournament-image" alt="" />
      <button className="tournament-button">More Details</button>
    </div>
  );
};

export default Tournament;
