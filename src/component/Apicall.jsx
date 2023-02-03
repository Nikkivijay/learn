import React, { useState, useEffect } from 'react'
import axios from "axios";

function Apicall() {
    const blank = {id: 0, firstName: '', lastName: '', city: '', age: '', gender: '', hobbies: []}
    const [obj, setobj] = useState({ ...blank });
    const [array, setarray] = useState([])
    let ary = obj.hobbies ? obj.hobbies : [];

    useEffect(() => {
        getApi();
    }, [])


    const getValue = (e) => {
        // setobj({...obj, [e.target.name]: e.target.value })
        if(e.target.name == 'hobbies')
        {
          if(e.target.checked)
          {
            ary.push(e.target.value)
          }
          else{
            ary = ary.filter(x => x != e.target.value)
          }
          obj.hobbies = ary;
        }
        else{
          obj[e.target.name] = e.target.value;
        }
        setobj({...obj})
        console.log(obj)
      } 


      const saveData = async (e) =>{
        e.preventDefault()
        setobj({...blank})

        if(obj.id == 0){
            axios.post('https://student-api.mycodelibraries.com/api/student/add',obj).then((res) => {
                            getApi()
                        })

                }else{
                   editRecord();
                }
        }


    const getApi = (e) => {
        axios.get("https://student-api.mycodelibraries.com/api/student/get").then((res) => {
            setarray([...res.data.data])
            // console.log(...res.data.data);  
        })
    }

    
    const postApi = () => {
        axios.post("https://student-api.mycodelibraries.com/api/student/add", obj).then((res) => {
            getApi();
            // console.log(...res.data.data);
        })
    }


    const deleteuser =(id) => {
        axios.delete(`https://student-api.mycodelibraries.com/api/student/delete?id=${id}`).then((res) => {
        getApi();
        })  
    }

    const getId = (id) => {
        axios.get(`https://student-api.mycodelibraries.com/api/student/get-student-by-id?id=${id}`).then((res) => {
            let object  = res.data.data;
            object.id = object._id;
            object.hobbies = object.hobbies.split(',');
            // console.log(object.hobbies)  
          setobj({...object})
        })
    }

    const editRecord = () => {
        axios.post(`https://student-api.mycodelibraries.com/api/student/update`, obj).then((res) => {
          getApi()
        })
      }

    const edituser = (id) => {
        getId(id);
    }

    return (
        <>
            <div>
                <form action="" id='form' className='w-50 mt-5 mx-auto shadow-lg p-3' onSubmit={saveData}>
                    <h2>FORM</h2>
                    <label htmlFor="" className='d-block'>First Name:</label>
                    <input type="text" name='firstName' value={obj.firstName} className='w-100' onChange={getValue}/>
                    <label htmlFor="" className='d-block mt-3'>Last Name:</label>
                    <input type="text" name='lastName'  value={obj.lastName}className='w-100'  onChange={getValue}/>
                    <label htmlFor="" className='d-block mt-3'>City:</label>
                    <input type="text" name='city' className='w-100'value={obj.city}  onChange={getValue}/>
                    <label htmlFor="" className='d-block mt-3'>Age:</label>
                    <input type="number" name='age' className='w-100' value={obj.age} onChange={getValue}/>
                    <label htmlFor="" className='mt-3'>Gender:</label>
                    <input type="radio" className='ms-3' name='gender' value='Male' checked={obj.gender?.includes('Male')} onChange={getValue}/><label>Male</label>
                    <input type="radio" className='ms-3' name='gender' value='Female' checked={obj.gender?.includes('Female')} onChange={getValue}/>Female<br />
                    <label htmlFor="" className='mt-3'>Hobby:</label>
                    <input type="checkbox" className='ms-3' name='hobbies' value='read' checked={obj.hobbies?.includes('read')} onChange={getValue}/><label>Read</label>
                    <input type="checkbox" className='ms-3' name='hobbies' value='write' checked={obj.hobbies?.includes('write')} onChange={getValue}/>Write
                    <input type="checkbox" className='ms-3' name='hobbies' value='dance' checked={obj.hobbies?.includes('dance')} onChange={getValue}/><label>Dance</label><br/>
                    
                    <input type="submit" className='mt-3 bg-info text-light border-0 p-2' />
                </form>
            </div>
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
                                    <td><button className='btn btn-danger' onClick={()=> deleteuser(x._id)}>DELETE</button></td>
                                    <td><button className='btn btn-warning' onClick={()=> edituser(x._id)}>EDIT</button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Apicall