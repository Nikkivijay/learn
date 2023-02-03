import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'

function Apifunroutingtable() {
    const [array, setarray] = useState([])
    const blank = { id: 0, firstName: '', lastName: '', city: '', age: '', gender: '', hobbies: [] }
    const [obj, setobj] = useState({ ...blank })
    let navigate = useNavigate()

    useEffect(() => {
        getApi()
    }, [array])

    const getApi = () => {
        axios.get('https://student-api.mycodelibraries.com/api/student/get').then((res) => {
            setarray([...res.data.data])
            // console.log(res.data.data);
        })
    }

    const deleteuser = (id) => {
        axios.delete(`https://student-api.mycodelibraries.com/api/student/delete?id=${id}`).then((res) => {
            getApi()
        })
    }

    const getbyid = (id) => {
        axios.get(`https://student-api.mycodelibraries.com/api/student/get-student-by-id?id=${id}`).then((res) => {
            let object = res.data.data;
            object.id = object._id;
            object.hobbies = object.hobbies.split(',');
            localStorage.setItem("obj", JSON.stringify(object))
            setobj({ ...object });
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

                        <th>FIRST NAME</th>
                        <th>LAST NAME</th>
                        <th>CITY</th>
                        <th>AGE</th>
                        <th>GENDER</th>
                        <th>HOBBY</th>
                        <th>DELETE</th>
                        <th>EDIT</th>
                    </thead>
                    <tbody>
                        {
                            array.map((x, i) => {
                                return <tr>
                                    <td>{x.firstName}</td>
                                    <td>{x.lastName}</td>
                                    <td>{x.city}</td>
                                    <td>{x.age}</td>
                                    <td>{x.gender}</td>
                                    <td>{x.hobbies}</td>
                                    <td><button className='btn btn-danger' onClick={() => deleteuser(x._id)}>DELETE</button></td>
                                    <td><button className='btn btn-warning' onClick={() => edituser(x._id)}>EDIT</button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Apifunroutingtable