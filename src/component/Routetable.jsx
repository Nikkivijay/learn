import React from 'react'
import { useState } from 'react';


function Routetable() {
  const [arr, setarr] = useState(JSON.parse(localStorage.getItem('array')) || [])

  const deleteuser = (id) => {
    let delindex = arr.findIndex(x => x.id == id);
    arr.splice(delindex , 1);
    setarr([...arr])
    localStorage.setItem("array", JSON.stringify(arr));
}
  return (
    <>
    
    <div>
      
      <table  className="table table-success table-striped mt-5" id="table">
          <thead>
              <th>ID</th>
              <th>IMAGE</th>
              <th>FIRST NAME</th>
              <th>LAST NAME</th>
              <th>EMAIL</th>
              <th>PASSWORD</th>
              <th>CITY</th>
              <th>DATE</th>
              <th>GENDER</th>
              <th>HOBBY</th>
              <th>EDIT</th>
              <th>DELETE</th>
          </thead>
          <tbody>
          {
          JSON.parse(localStorage.getItem('array'))?.map((x, i) => {
              return <tr>
                <td>{x.id}</td>
                <td><img src={x.file} style={{width: '50px'}}/></td>
                <td>{x.fname}</td>
                <td>{x.lname}</td>
                <td>{x.email}</td>
                <td>{x.password}</td>
                <td>{x.city}</td>
                <td>{x.date}</td>
                <td>{x.gender}</td>
                <td>{x.hobby?.join(',')}</td>
                
                {/* <td><button className='btn btn-warning' onClick={()=> edituser(x.id)}>EDIT</button></td> */}
                <td><button className='btn btn-danger' onClick={()=> deleteuser(x.id)}>DELETE</button></td>
                </tr>
          })
      }
          </tbody>
      </table>
      </div>
    
    </>
  )
}

export default Routetable;