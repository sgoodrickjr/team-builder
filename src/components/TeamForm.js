import React, { useState } from 'react'



const TeamForm = props => {

    const [memberAttributes, setMemberAttributes] = useState([
        {
          id: Date.now(), 
          name: "",
          email: "",
          role: ""
        }
      ]);

      const changeHandler = event => {
        setMemberAttributes({ ...memberAttributes, [event.target.name]: event.target.value });
      };

      const submitHandler = event => {
        event.preventDefault();
        props.addTeamMember(memberAttributes);
        setMemberAttributes({ email: "", name: "", role: ""});
      };

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="email">Email</label>
            <input
                onChange={changeHandler}
                id="email"
                type="text"
                name="email"
                placeholder="Email"
                value={memberAttributes.email}
            />
            <label htmlFor="name">Name</label>
            <input
                onChange={changeHandler}
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                value={memberAttributes.name}
            />
            <label htmlFor="role">Role</label>
            <input
                onChange={changeHandler}
                id="role"
                type="text"
                name="role"
                placeholder="Role"
                value={memberAttributes.role}
            />
            <button type="submit">Click To Submit!</button>
        </form>
    )
}


export default TeamForm