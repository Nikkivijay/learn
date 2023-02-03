import React from 'react'
import { array1, count1 } from '../App';
import TableCom from './TableCom'
import { useState } from 'react';
import { obj1 } from '../App';
import { useNavigate } from 'react-router';

function Form1() {
  let navigate = useNavigate()
  const blank = { id: 0, fname: '', lname: '', email: '', password: '', city: '', date: '', gender: '', hobby: [] }
  const [obj, setobj] = useState({ ...blank });
  const [arr, setarr] = useState([]);
  const [count, setcount] = useState(1);
  let ary = obj.hobby ? obj.hobby : [];


  const getValue = (e) => {
    // setobj({...obj, [e.target.name]: e.target.value })
    if (e.target.name == 'hobby') {
      if (e.target.checked) {
        ary.push(e.target.value)
      }
      else {
        ary = ary.filter(x => x != e.target.value)
      }
      obj.hobby = ary;
      obj1.obj.hobby = ary;
    }
    else {
      obj[e.target.name] = e.target.value;
      obj1.obj[e.target.name] = e.target.value;
    }
    setobj({ ...obj })
  }

  const saveData = (e) => {
    e.preventDefault()
    if (obj1.obj.id == 0) {
      // setcount(count+1);
      count1.num += 1;
      obj.id = count1.num;
      obj1.obj = { id: 0, fname: '', lname: '', email: '', password: '', city: '', date: '', gender: '', hobby: [] }
      array1?.push(obj)
      // setarr([...arr])
    }
    else {
      obj1.obj = { id: 0, fname: '', lname: '', email: '', password: '', city: '', date: '', gender: '', hobby: [] }

    }
    navigate('/table')


    // array1.push({...obj});
    setobj({ ...blank });
    // console.log(obj);
  }


  return (
    <>
      <div>
        <form action="" id='form' className='w-50 mt-5 mx-auto shadow-lg p-3' onSubmit={saveData}>
          <h2>FORM</h2>
          <label htmlFor="" className='d-block'>First Name:</label>
          <input type="text" name='fname' className='w-100' value={(obj1 ? obj1.obj : obj).fname} onChange={getValue} />
          <label htmlFor="" className='d-block mt-3'>Last Name:</label>
          <input type="text" name='lname' className='w-100' value={(obj1 ? obj1.obj : obj).lname} onChange={getValue} />
          <label htmlFor="" className='d-block mt-3'>Email:</label>
          <input type="email" name='email' className='w-100' value={(obj1 ? obj1.obj : obj).email} onChange={getValue} />
          <label htmlFor="" className='d-block mt-3'>Password:</label>
          <input type="password" name='password' className='w-100' value={(obj1 ? obj1.obj : obj).password} onChange={getValue} />
          <label htmlFor="" className='d-block mt-3'>City:</label>
          <input type="text" name='city' className='w-100' value={(obj1 ? obj1.obj : obj).city} onChange={getValue} />
          <label htmlFor="" className='d-block mt-3'>Date:</label>
          <input type="date" name='date' className='w-100' value={(obj1 ? obj1.obj : obj).date} onChange={getValue} />
          <label htmlFor="" className='mt-3'>Gender:</label>
          <input type="radio" className='ms-3' name='gender' value='Male' checked={(obj1 ? obj1.obj : obj).gender.includes('Male')} onChange={getValue} /><label>Male</label>
          <input type="radio" className='ms-3' name='gender' value='Female' checked={(obj1 ? obj1.obj : obj).gender.includes('Female')} onChange={getValue} />Female<br />
          <label htmlFor="" className='mt-3'>Hobby:</label>
          <input type="checkbox" className='ms-3' name='hobby' value='read' checked={(obj1 ? obj1.obj : obj).hobby.includes('read')} onChange={getValue} /><label>Read</label>
          <input type="checkbox" className='ms-3' name='hobby' value='write' checked={(obj1 ? obj1.obj : obj).hobby.includes('write')} onChange={getValue} />Write
          <input type="checkbox" className='ms-3' name='hobby' value='dance' checked={(obj1 ? obj1.obj : obj).hobby.includes('dance')} onChange={getValue} /><label>Dance</label><br />
          <input type="submit" className='mt-3 bg-info text-light border-0 p-2' />
        </form>
      </div>
      <div>
        {/* <TableCom arr={arr} /> */}
      </div>
    </>
  )
}

export default Form1