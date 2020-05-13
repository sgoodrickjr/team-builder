import React from "react";

const TeamMembers = props => {
  return (
    <div className="team-list">
      {props.team.map(team => (
        <div className="team" key={team.id}>
          <h2>{team.email}</h2>
          <h2>{team.name}</h2>
          <h2>{team.role}</h2>
        </div>
      ))}
    </div>
  );
};

export default TeamMembers;