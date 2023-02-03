import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

function Tokenfunroutingtable() {
    const [array, setarray] = useState([])
    const blank = {id:0 , name: '', email: '', gender: '', status: ''}
    const [obj, setobj] = useState({...blank})

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
    }, [array])
    

    const getApi = () =>{
        axios.get("https://gorest.co.in/public/v2/users", headerobj)
      .then((x) => {
        setarray([...x.data])
      })
    }

    const deleteuser = (id) => {
        axios.delete(`https://gorest.co.in/public/v2/users/${id}`, headerobj).then((x) => {
        getApi()
      })
    }



    const getbyid = (id) => {
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
      navigate('/')
      })
    }

    const edituser = (id) => {
        getbyid(id)
    }
    return (
        <>
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

export default Tokenfunroutingtable