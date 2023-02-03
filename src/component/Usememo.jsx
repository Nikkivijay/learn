import React, { useMemo, useState } from 'react'

function Usememo() {
  const [count, setcount] = useState(0);
  const [item, setitem] = useState(2);
  
  const multicountmemo = useMemo(function multicount()
  {
      console.warn('oscar');
      return count*5;
      
    },[count])

  return(
    <>
    <div>User memo</div>
    <h1>Count: {count}</h1>
    <h1>Item: {item}</h1>
    <h1>{multicountmemo}</h1>
    <button onClick={() => setcount(count+1)}>UPDATE COUNT</button>
    <button onClick={() => setitem(item*10)}>UPDATE ITEM</button>
    
    </>
  )
}

export default Usememo