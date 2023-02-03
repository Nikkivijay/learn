import React, {useState} from 'react'

function Event() {
    const [first, setfirst] = useState(1);
    const increement = () => {
        setfirst(first + 1)
    }
  return (
    <>
    <h2>{first}</h2>
    <button onClick={increement}>Click</button>
    </>
  )
}

export default Event