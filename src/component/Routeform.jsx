import React from 'react'
import { useState } from 'react';

function Routeform() {
  const blank = {id: 0, file: '' ,fname: '', lname: '', email: '', password: '', city: '', date: '', gender: '', hobby: []}
  const [obj,setobj] = useState({...blank});
  const [arr, setarr] = useState(JSON.parse(localStorage.getItem('array')) || [])
  const [count , setcount] = useState(JSON.parse(localStorage.getItem('count'))+1 || 1)
  let ary = obj.hobby ? obj.hobby: [];

  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});


  const getValue = (e) => {
    // setobj({...obj, [e.target.name]: e.target.value })
    if(e.target.name == 'hobby')
    {
      if(e.target.checked)
      {
        ary.push(e.target.value)
      }
      else{
        ary = ary.filter(x => x != e.target.value)
      }
      obj.hobby=ary;
      // console.log(hobby);
    }
    else{
      obj[e.target.name] = e.target.value;
    }
    setobj({...obj})
  } 

  const saveData = async (e) =>{
    e.preventDefault()
    if(obj.id == 0){
      setcount(count+1);
      obj.id = count;
      arr.push(obj)
      setarr([...arr])
    }
    else{
      let index = arr.findIndex(x => x.id == obj.id);
      arr.splice(index, 1 , obj);
      setarr([...arr])
    }
    const file = document.querySelector('#file').files[0];
    obj.file = await toBase64(file);
    setobj({...blank});
    // console.log(obj);
    localStorage.setItem("array", JSON.stringify(arr));
    localStorage.setItem("count", JSON.stringify(count));

  }

  

const edituser = (id) => {
  let editobj = arr.find(x => x.id  == id)
  console.log(editobj);
  setobj({...editobj});
}
  return (
   <>
   {/* <div>
      
    </div> */}
   <div>
   
        <form action="" id='form' className='w-50 mt-5 mx-auto shadow-lg p-3' onSubmit= {saveData}>
      
            <h2>FORM</h2>
            <label htmlFor="" className='d-block'>First Name:</label>
            <input type="text" name='fname' className='w-100' value={obj.fname} onChange={getValue}/>
            <label htmlFor="" className='d-block mt-3'>Last Name:</label>
            <input type="text" name='lname' className='w-100'  value={obj.lname} onChange={getValue}/>
            <label htmlFor="" className='d-block mt-3'>Email:</label>
            <input type="email" name='email' className='w-100'  value={obj.email} onChange={getValue}/>
            <label htmlFor="" className='d-block mt-3'>Password:</label>
            <input type="password" name='password' className='w-100'  value={obj.password} onChange={getValue}/>
            <label htmlFor="" className='d-block mt-3'>City:</label>
            <input type="text" name='city' className='w-100'  value={obj.city} onChange={getValue}/>
            <label htmlFor="" className='d-block mt-3'>Date:</label>
            <input type="date" name='date' className='w-100'  value={obj.date} onChange={getValue}/>
            <label htmlFor="" className='mt-3'>Gender:</label>
            <input type="radio" className= 'ms-3' name='gender' value='Male' checked={obj.gender.includes('Male')} onChange={getValue}/><label>Male</label>
            <input type="radio" className= 'ms-3' name='gender' value='Female' checked={obj.gender.includes('Female')} onChange={getValue}/>Female<br/>
            <label htmlFor="" className='mt-3'>Hobby:</label>
            <input type="checkbox" className='ms-3' name='hobby' value='read'  checked={obj.hobby?.includes('read')} onChange={getValue}/><label>Read</label>
            <input type="checkbox" className='ms-3' name='hobby' value='write' checked={obj.hobby?.includes('write')} onChange={getValue}/>Write
            <input type="checkbox" className='ms-3' name='hobby' value='dance' checked={obj.hobby?.includes('dance')} onChange={getValue}/><label>Dance</label><br/>
            <label htmlFor="" className='d-block'>File:</label>
            <input type="file" name='file' id= "file" className='w-100' value={obj.file}  onChange={getValue}/>
            <input type="submit" className='mt-3 bg-info text-light border-0 p-2'/>
        </form>
    </div>
   
   </>
  )
}

export default Routeform