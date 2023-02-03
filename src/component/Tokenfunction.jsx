import axios from 'axios';
import React, { useState, useEffect } from 'react'

function Tokenfunction() {
  const blank = { id: 0, name: '', email: '', gender: '', status: '' }
  const [obj, setobj] = useState({ ...blank });
  const [array, setarray] = useState([])

  let token = 'Bearer f0f0dafbaef7856c4013339fe7179a6a8d696f76d4f69b1ebf1738205e978737';

  const headerobj = {
    headers: {
      'Content-Type': 'application/json',
      "Authorization": token
    }
  }

  useEffect(() => {
    getApi();
  }, []);

  const getApi = () => {
    axios.get("https://gorest.co.in/public/v2/users", headerobj)
      .then((x) => {
        setarray([...x.data])
      })
  }

  const getValue = (e) => {
    obj[e.target.name] = e.target.value;
    setobj({ ...obj });
    console.log(setobj)
  }

  const savedata = (e) => {
    e.preventDefault()
    if(obj.id == 0){
      postApi()
    }
    else{
      axios.patch(`https://gorest.co.in/public/v2/users/${obj.id}`, obj, headerobj).then((x) => {
      getApi()
    })
    }
    setobj({ ...blank })
  }

  const postApi = () => {
    axios.post('https://gorest.co.in/public/v2/users', obj, headerobj).then((x) => {
      console.log(x);
      getApi()
    })
  }

  const deleteuser = (id) =>{
          axios.delete(`https://gorest.co.in/public/v2/users/${id}`, headerobj).then((x) => {
        getApi()
      })
  }


  const edit = (id) => {
    axios.get(`https://gorest.co.in/public/v2/users/${id}`, headerobj).then((x) => {
      if(x.data.gender == "male"){
        x.data.gender = "Male"
      }
      else{
        x.data.gender = "Female"
      }
      if(x.data.status=='active')
      {
        x.data.status="Active"
      }
      else{
        x.data.status="Inactive"
      }
      let object = x.data;
      object.id = id;
      setobj({...object});
      })
     }

  const edituser = (id) => {
    edit(id)
  }
  return (
    <>
      <div>
        <form action="" id='form' className='w-50 mt-5 mx-auto shadow-lg p-3' onSubmit={savedata}>
          <h2>FORM</h2>
          <label htmlFor="" className='d-block'>First Name:</label>
          <input type="text" name='name' value={obj.name} className='w-100' onChange={getValue} />


          <label htmlFor="" className='d-block mt-3'>Email:</label>
          <input type="email" name='email' className='w-100' value={obj.email} onChange={getValue} />

          <label htmlFor="" className='mt-3'>Gender:</label>
          <input type="radio" className='ms-3' name='gender' value='Male' checked={obj.gender?.includes('Male')} onChange={getValue} /><label>Male</label>
          <input type="radio" className='ms-3' name='gender' value='Female' checked={obj.gender?.includes('Female')} onChange={getValue} />Female<br />

          <label htmlFor="" className='mt-3'>Status:</label>
          <input type="radio" className='ms-3' name='status' value='Active' checked={obj.status?.includes('Active')} onChange={getValue} /><label>Active</label>
          <input type="radio" className='ms-3' name='status' value='Inactive' checked={obj.status?.includes('Inactive')} onChange={getValue} />Inactive<br />
          <input type="submit" className='mt-3 bg-info text-light border-0 p-2' />
        </form>
      </div>
      <div>

        <table className="table table-success table-striped mt-5" id="table">
          <thead>
            <th>ID</th>
            <th>FIRST NAME</th>
            <th>EMAIL</th>
            <th>GENDER</th>
            <th>STATUS</th>
            <th>DELETE</th>
            <th>EDIT</th>
          </thead>
          <tbody>
            {
              array.map((x, i) => {
                return <tr>
                  <td>{x.id}</td>
                  {/* <td><img src={x.image} alt="" width='50px' height='50px'/></td> */}
                  <td>{x.name}</td>
                  <td>{x.email}</td>
                  <td>{x.gender}</td>
                  <td>{x.status}</td>
                  <td><button className='btn btn-danger' onClick={() => deleteuser(x.id)}>DELETE</button></td>
                  <td><button className='btn btn-warning' onClick={() => edituser(x.id)}>EDIT</button></td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Tokenfunction