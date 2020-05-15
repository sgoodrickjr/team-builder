import React from "react";

const TeamMembers = props => {
  console.log("props", props)
  return (
    <div className="team-list">
      {props.team.map((team, index) => (
        <div className="team" key={index}>
          <h2>{team.email}</h2>
          <h2>{team.name}</h2>
          <h2>{team.role}</h2>
        </div>
      ))}
    </div>
  );
};

export default TeamMembers;