import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';


function Register() {
  const blank = { id: 0, fname: '', lname: '', pno: '', email: '', password: '', cpassword: '', city: '', date: '', gender: '', file: '', hobby: [] }
  const [obj, setobj] = useState({ ...blank });
  const [arr, setarr] = useState(JSON.parse(localStorage.getItem('arr')) || [])
  const [count, setcount] = useState(JSON.parse(localStorage.getItem('count')) + 1 || 1)
  let ary = obj.hobby ? obj.hobby : [];
  const [errorMsg, seterrorMsg] = useState([])

  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });


  const getValue = (e) => {
    if (e.target.name == 'hobby') {
      if (e.target.checked) {
        ary.push(e.target.value)
      }
      else {
        ary = ary.filter(x => x != e.target.value)
      }
      obj.hobby = ary;
    }
    else {
      obj[e.target.name] = e.target.value;
    }


    if (errorMsg.includes(e.target.name) && e.target.value != '') {
      let aa = errorMsg.filter(x => x != e.target.name)
      seterrorMsg([...aa])
    }
    if (!errorMsg.includes(e.target.name) && e.target.value == '') {
      errorMsg?.push(e.target.name)
      let aa = errorMsg;
      seterrorMsg([...aa])
    }
    setobj({ ...obj })
    console.log(setobj)
  }
  const register = async (e) => {
    e.preventDefault();
    if (obj.id == 0) {
      setcount(count + 1);
      obj.id = count;
      arr.push(obj);
      setarr([...arr]);
      console.log(arr);

      const file = document.querySelector('#file').files[0];
      obj.file = file ? await toBase64(file) : '';


    }
    if (obj.fname == '' && !errorMsg.includes('fname')) {
      errorMsg?.push('fname')
    }
    if (obj.lname == '' && !errorMsg.includes('lname')) {
      errorMsg?.push('lname')
    }
    if (obj.pno == '' && !errorMsg.includes('pno')) {
      errorMsg?.push('pno')
    }
    if (obj.email == '' && !errorMsg.includes('email')) {
      errorMsg?.push('email')
    }
    if (obj.password == '' && !errorMsg.includes('password')) {
      errorMsg?.push('password')
    }
    if (obj.cpassword == '' && !errorMsg.includes('cpassword')) {
      errorMsg?.push('cpassword')
    }
    if (obj.gender == '' && !errorMsg.includes('gender')) {
      errorMsg?.push('gender')
    }
    

    if (obj.fname != '' && obj.lname != '' && obj.email != '' && obj.password != '' && obj.cpassword != '' && obj.pno != '' && obj.gender != '') {
      setobj({ ...blank })
    }

    seterrorMsg([...errorMsg])
    localStorage.setItem('arr', JSON.stringify(arr))
    localStorage.setItem('count', count)
    setobj({ ...blank })
  }

  return (
    <>
      <div className='container h-100' id='register'>
        <div>
          <form action="" id='form' className='w-50 mx-auto p-3' onSubmit={register} style={{ backgroundColor: '' }}>
            <h2 className='mx-auto' style={{ color: 'indianred' }}>REGISTER</h2>
            <label htmlFor="" className='d-block'>First Name:</label>
            <input type="text" name='fname' className='w-100 .inp-icon' value={obj.fname} onChange={getValue} /><br />
            <span className={errorMsg.includes('fname') ? 'd-block' : 'd-none'} style={{ color: 'red' }}>First name is required..</span>
            <label htmlFor="" className='d-block mt-3'>Last Name:</label>
            <input type="text" name='lname' className='w-100' value={obj.lname} onChange={getValue} />
            <span className={errorMsg.includes('lname') ? 'd-block' : 'd-none'} style={{ color: 'red' }}>Last name is required..</span>
            <label htmlFor="" className='d-block mt-3'>Phone Number:</label>
            <input type="number" name='pno' className='w-100' value={obj.pno} onChange={getValue} />
            <span className={errorMsg.includes('pno') ? 'd-block' : 'd-none'} style={{ color: 'red' }}>Phone number is required..</span>
            <label htmlFor="" className='d-block mt-3'>Email:</label>
            <input type="email" name='email' className='w-100' value={obj.email} onChange={getValue} />
            <span className={errorMsg.includes('email') ? 'd-block' : 'd-none'} style={{ color: 'red' }}>Email is required..</span>
            <label htmlFor="" className='d-block mt-3'>Password:</label>
            <input type="password" name='password' className='w-100' value={obj.password} onChange={getValue} />
            <span className={errorMsg.includes('password') ? 'd-block' : 'd-none'} style={{ color: 'red' }}>Password is required..</span>
            <label htmlFor="" className='d-block mt-3'>Confrim Password:</label>
            <input type="password" name='cpassword' className='w-100' value={obj.cpassword} onChange={getValue} />
            <span className={errorMsg.includes('cpassword') ? 'd-block' : 'd-none'} style={{ color: 'red' }}>Confirm password is required..</span>
            <label htmlFor="" className='d-block mt-3'>City:</label>
            <input type="text" name='city' className='w-100' value={obj.city} onChange={getValue} />
            <label htmlFor="" className='d-block mt-3'>Date:</label>
            <input type="date" name='date' className='w-100' value={obj.date} onChange={getValue} />
            <label htmlFor="" className='mt-3'>Gender:</label>
            <input type="radio" className='ms-3' name='gender' value='Male' checked={obj.gender.includes('Male')} onChange={getValue} /><label>Male</label>
            <input type="radio" className='ms-3' name='gender' value='Female' checked={obj.gender.includes('Female')} onChange={getValue} />Female<br />
            <span className={errorMsg.includes('gender') ? 'd-block' : 'd-none'} style={{ color: 'red' }}>gender is required..</span>
            <label htmlFor="" className='mt-3'>Hobby:</label>
            <input type="checkbox" className='ms-3' name='hobby' value='read' checked={obj.hobby?.includes('read')} onChange={getValue} /><label>Read</label>
            <input type="checkbox" className='ms-3' name='hobby' value='write' checked={obj.hobby?.includes('write')} onChange={getValue} />Write
            <input type="checkbox" className='ms-3' name='hobby' value='dance' checked={obj.hobby?.includes('dance')} onChange={getValue} /><label>Dance</label>
            <label htmlFor="" className='d-block mt-3'>Profile:</label>
            <input type="file" name='file' className='w-100' id='file' value={obj.file} onChange={getValue} />
            <br />
            <input type="submit" className='mt-3  text-light border-0 p-2' style={{ backgroundColor: 'indianred' }} />
            <div style={{ textAlign: "center" }}>
              <span style={{ color: 'black' }}>Already have an Account? <NavLink to="/login"><span style={{ color: 'indianred', border: 'none' }}>SingIn</span></NavLink></span>
            </div>
          </form>
          <br />

        </div>
        <div>
        </div>
      </div>
    </>
  )
}

export default Register