import React from 'react'
import { useState, useRef, useEffect } from 'react';

function Useref() {

const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current.style.color = 'blue'
    count.current.value = 'red'
  });
  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        ref={count}
      />
    </>
  )
}

export default Useref