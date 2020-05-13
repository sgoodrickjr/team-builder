import React, { useState } from 'react'


const TeamForm = props => {

      const handleChanges = event => {
        setTeamList({ ...team, [event.target.name]: event.target.value });
      };

      const submitForm = event => {
        event.preventDefault();
        props.addTeamMember(team);
        setTeamList({ email: "", name: "", role: ""});
      };

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="email">Email</label>
            <input
                onChange={handleChanges}
                id="email"
                type="text"
                name="email"
                placeholder="Email"
                value={team.email}
            />
            <label htmlFor="name">Name</label>
            <input
                onChange={handleChanges}
                id="email"
                type="text"
                name="name"
                placeholder="Name"
                value={team.name}
            />
            <label htmlFor="role">Role</label>
            <input
                onChange={handleChanges}
                id="email"
                type="text"
                name="role"
                placeholder="Role"
                value={team.role}
            />
            <button type="submit">Click To Submit!</button>
        </form>
    )
}


export default TeamForm