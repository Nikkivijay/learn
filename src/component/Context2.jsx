import React from 'react'
import { useContext } from 'react'
import { UserContext } from './Usecontext'

function Context2() {
  let user = useContext(UserContext)
  return (
    <>
      <h1>oscar career point</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  )
}

export default Context2