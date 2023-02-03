import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router';

function Apifunroutingform() {
  const blank = { id: 0, firstName: '', lastName: '', city: '', age: '', gender: '', hobbies: [] }
  const [obj, setobj] = useState(JSON.parse(localStorage.getItem("obj")) || { ...blank })
  const [array, setarray] = useState([])
  let ary = obj.hobbies ? obj.hobbies : [];
  let navigate = useNavigate()

  useEffect(() => {
    getApi()
  }, [])

  const getValue = (e) => {
    if (e.target.name == 'hobbies') {
      if (e.target.checked) {
        ary.push(e.target.value)
      }
      else {
        ary = ary.filter(x => x != e.target.value)
      }
      obj.hobbies = ary;
    }
    else {
      obj[e.target.name] = e.target.value;
    }
    setobj({ ...obj })
    console.log(obj)
  }


  const saveData = (e) => {
    e.preventDefault();
    if (obj.id == 0) {
      postApi()
    }
    else {
      postApi();
    }
    setobj({ ...blank })
    console.log(obj)
    navigate('/table')
  }


  const getApi = () => {
    axios.get('https://student-api.mycodelibraries.com/api/student/get').then((res) => {
      setarray([...res.data.data])
    })
  }

  const postApi = () => {
    axios.post('https://student-api.mycodelibraries.com/api/student/add', obj).then((res) => {
      getApi()
    })
  }
  return (
    <>
      <div>
        <form action="" id='form' className='w-50 mt-5 mx-auto shadow-lg p-3' onSubmit={saveData}>
          <h2>FORM</h2>
          <label htmlFor="" className='d-block'>First Name:</label>
          <input type="text" name='firstName' value={obj.firstName} className='w-100' onChange={getValue} />
          <label htmlFor="" className='d-block mt-3'>Last Name:</label>
          <input type="text" name='lastName' value={obj.lastName} className='w-100' onChange={getValue} />
          <label htmlFor="" className='d-block mt-3'>City:</label>
          <input type="text" name='city' className='w-100' value={obj.city} onChange={getValue} />
          <label htmlFor="" className='d-block mt-3'>Age:</label>
          <input type="number" name='age' className='w-100' value={obj.age} onChange={getValue} />
          <label htmlFor="" className='mt-3'>Gender:</label>
          <input type="radio" className='ms-3' name='gender' value='Male' checked={obj.gender?.includes('Male')} onChange={getValue} /><label>Male</label>
          <input type="radio" className='ms-3' name='gender' value='Female' checked={obj.gender?.includes('Female')} onChange={getValue} />Female<br />
          <label htmlFor="" className='mt-3'>Hobby:</label>
          <input type="checkbox" className='ms-3' name='hobbies' value='read' checked={obj.hobbies?.includes('read')} onChange={getValue} /><label>Read</label>
          <input type="checkbox" className='ms-3' name='hobbies' value='write' checked={obj.hobbies?.includes('write')} onChange={getValue} />Write
          <input type="checkbox" className='ms-3' name='hobbies' value='dance' checked={obj.hobbies?.includes('dance')} onChange={getValue} /><label>Dance</label><br />

          <input type="submit" className='mt-3 bg-info text-light border-0 p-2' />
        </form>
      </div>
    </>
  )
}

export default Apifunroutingform