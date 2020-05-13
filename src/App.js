import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TeamForm from './components/TeamForm';
import TeamMembers from './components/TeamMembers';

function App() {
  
  const [teamList, setTeamList] = useState([
    {
      id: Date.now(), 
      name: "",
      email: "",
      role: ""
    }
  ]);

  const addTeamMember = (team) => {
    setTeamList([...teamList, team]);
  };

  
  return (
    <div className="App">
      <TeamForm team = {teamList} addTeamMember = {addTeamMember} setTeamList = {setTeamList}/>
    </div>
  );
}

export default App;
