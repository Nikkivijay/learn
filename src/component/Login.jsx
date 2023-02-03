import React from 'react'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Login() {
  const [obj, setobj] = useState({email: "", password: ""})
  const [array, setarray] = useState(JSON.parse(localStorage.getItem('arr')) || [])
  const [errorMsg, seterrorMsg] = useState([])
  const navigate = useNavigate()
    let change = (e) => {
        obj[e.target.name] = e.target.value;
        if (errorMsg.includes(e.target.name) && e.target.value != '') {
          let aa = errorMsg.filter(x => x != e.target.name)
          seterrorMsg([...aa])
        }
        if (!errorMsg.includes(e.target.name) && e.target.value == '') {
          errorMsg?.push(e.target.name)
          let aa = errorMsg;
          seterrorMsg([...aa])
        }
        setobj({...obj});
    }
    let login = (e) => {
      e.preventDefault();
      if (obj.email == '' && !errorMsg.includes('email')) {
        errorMsg?.push('email')
      }
      if (obj.password == '' && !errorMsg.includes('password')) {
        errorMsg?.push('password')
      }
       
        seterrorMsg([...errorMsg])
      let loginObject = array.find(x => (x.email === obj.email) && (x.password === obj.password));
      if(loginObject){
        localStorage.setItem('LoginUser' , loginObject.id);
        setTimeout(() => {
          window.location.reload()
        }, 1000);
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
      }
      else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    }
   
  } 
  return (
    <>
      
      <div className='container h-100 mt-5 ' id='register'>
            <div>
            <form action="" id='form' className='w-50 mx-auto p-3'  onSubmit= {login} >
            <h2 className='mx-auto' style={{color: 'indianred'}}>LOGIN</h2>
            <label htmlFor="" className='d-block mt-5'>Email:</label>
            <input type="email" name='email' className='w-100 mt-3'  value={obj.email} onChange={change}/>
            <span className={errorMsg.includes('email') ? 'd-block' : 'd-none'} style={{ color: 'red' }}>Email is required..</span>
            <label htmlFor="" className='d-block mt-5'>Password:</label>
            <input type="password" name='password' className='w-100 mt-3'  value={obj.password} onChange={change}/>
            <span className={errorMsg.includes('password') ? 'd-block' : 'd-none'} style={{ color: 'red' }}>Password is required..</span>
            <input type="submit" className='mt-5  text-light border-0 p-2' style={{backgroundColor: 'indianred'}}/>
            <div style={{textAlign:"center"}}>
            <span>Not a Member <NavLink to="/">SignUp Now</NavLink></span>
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

export default Login