import React, { useState } from 'react'


function Profile() {
    const [arr, setarr] = useState(JSON.parse(localStorage.getItem('arr')) || []);
    return(
        [arr.find(x=>x.id== JSON.parse(localStorage.getItem("LoginUser")))].map(x => {
            return (
                <>
                <div className='container h-100 mt-5' id='register'>
                <h2 className='mx-auto' style={{color: 'indianred'}}>PROFILE</h2>
                <div className='row'>
                <div className='col-4 ' style={{border: '1px solid red'}}>
                    <img src={x.file} alt="" />
                </div>
                <div className='col-8 mx-auto'  style={{border: '1px solid red'}}>
                    <h5 style={{color: 'indianred'}}>FIRST NAME:<span style={{color: 'white'}}>{x.fname}</span></h5>
                    
                    <h5 style={{color: 'indianred'}}>LAST NAME:<span style={{color: 'white'}}>{x.lname}</span></h5>
                    
                    <h5 style={{color: 'indianred'}}>PHONE NO:<span style={{color: 'white'}}>{x.pno}</span></h5>
                    
                    <h5 style={{color: 'indianred'}}>EMAIL:<span style={{color: 'white'}}>{x.email}</span></h5>
                    
                    <h5 style={{color: 'indianred'}}>CITY:<span style={{color: 'white'}}>{x.city}</span></h5>
                    
                    <h5 style={{color: 'indianred'}}>GENDER:<span style={{color: 'white'}}>{x.gender}</span></h5>
                    
                    <h5 style={{color: 'indianred'}}>HOBBY:<span style={{color: 'white'}}>{x.hobby}</span></h5>
                    
                    <h5 style={{color: 'indianred'}}>DATE:<span style={{color: 'white'}}>{x.date}</span><br /><br/></h5>
                    
                <button onClick={() =>{ localStorage.removeItem('LoginUser'); window.location.reload()}} style={{backgroundColor:'indianred', color: 'white', border: 'none', padding: '5px'}}>Logout</button>
                </div>
                
                </div>
                </div>
                </>
              )
        })
    )
  
}

export default Profile