import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteuser } from './redux/action/Action';

function Reduxtable(props) {
    const dispatch = useDispatch();
    const allData = useSelector(state => state)
    
    let edituser = (id) => {
        props.edit(id)
    }
  return (
    <>
     <table className='table'>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead> 
         <tbody>
          {
            allData.data.array?.map(x => {
              return <tr>
                <td>{x.id}</td>
                <td>{x.fname}</td>
                <td>{x.lname}</td>
                <td>{x.email}</td>
                <td>
                  <button className='btn btn-info' onClick={()=>edituser(x.id)}>Edit</button>
                  <button className='btn btn-danger ms-2' onClick={()=>dispatch(deleteuser(x.id))}>Delete</button>
                </td>
              </tr>
            })
          }
        </tbody> 
      </table>
    </>
  )
}

export default Reduxtable