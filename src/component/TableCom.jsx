import React from 'react'
import { array1 ,obj1} from '../App'
import { useState } from 'react'
import { useNavigate } from 'react-router';


function TableCom() {
  const blank = {id: 0, fname: '', lname: '', email: '', password: '', city: '', date: '', gender: '', hobby: []}
  const [obj,setobj] = useState({...blank});
  const [arr, setarr] = useState([]);

let navigate = useNavigate()
  const deleteuser = (id) => {
    let delindex = array1.findIndex(x => x.id == id);
    array1.splice(delindex , 1);
    setarr([...array1])
}

const edituser = (id) => {
  let editobj = array1.find(x => x.id  == id)
  obj1.obj= editobj
  navigate ('/');

}
  return (
    <>
        <table  className="table table-success table-striped mt-5" id="table">
        <thead>
            <th>ID</th>
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
        array1.map((x, i) => {
            return <tr>
              <td>{x.id}</td>
              <td>{x.fname}</td>
              <td>{x.lname}</td>
              <td>{x.email}</td>
              <td>{x.password}</td>
              <td>{x.city}</td>
              <td>{x.date}</td>
              <td>{x.gender}</td>
              <td>{x.hobby?.join(',')}</td>
              <td><button className='btn btn-warning' onClick={ () => edituser(x.id)}>EDIT</button></td>
              <td><button className='btn btn-danger' onClick={ () => deleteuser(x.id)}>DELETE</button></td>
              </tr>
        })
    }
        </tbody>
    </table>
    </>
  )
}

export default TableCom