import React, { useState } from 'react'

function State() {
    const [first, setfirst] = useState(10)
    setInterval (() => {
        setfirst(first+1)
    },1000);
  return (
    <>
    {first}
    </>
  )
}


function Stateobj() {
    const [first, setfirst] = useState({a:10})
        setInterval (() =>{
            setfirst({a:first.a + 1})
        },1000);
  return (
    <>
    {first.a}
    </>
  )
}


export{State , Stateobj}