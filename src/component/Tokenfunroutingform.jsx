import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router';

function Tokenfunroutingform() {

    const blank = { id: 0, name: '', email: '', gender: '', status: '' }
    const [obj, setobj] = useState({ ...blank });
    const [array, setarray] = useState([])
    let navigate = useNavigate()

    let token = 'Bearer f0f0dafbaef7856c4013339fe7179a6a8d696f76d4f69b1ebf1738205e978737';

    const headerobj = {
        headers: {
            'Content-Type': 'application/json',
            "Authorization": token
        }
    }

    useEffect(() => {
      getApi()
    }, [])
    

    const getApi = () => {
        axios.get("https://gorest.co.in/public/v2/users", headerobj)
      .then((x) => {
        setarray([...x.data])
      })
    }


    const postApi = () => {
        axios.post('https://gorest.co.in/public/v2/users', obj, headerobj).then((x) => {
      console.log(x);
      getApi()
    })
    }

    const getValue = (e) => {
        obj[e.target.name] = e.target.value;
    setobj({ ...obj });
    // console.log(obj)
    }


    const savedata = (e) =>{
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
    navigate('/table')
    console.log(obj);
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
        </>
    )
}

export default Tokenfunroutingform