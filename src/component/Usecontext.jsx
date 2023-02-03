import React from 'react'
import { useState, createContext } from 'react';
import Context1 from './Context1';

export const UserContext = createContext();

function Usecontext() {
    const [user, setUser] = useState("oscar career point");
  return (
    <UserContext.Provider value={user}>
      <h1>{`oscar ${user}!`}</h1>
      <Context1 />
    </UserContext.Provider>
  )
}

export default Usecontext