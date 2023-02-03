import React, { useState, useEffect } from 'react'
import axios from "axios";

function ApiImage() {
    const blank = {id: 0, firstName: '', lastName: '', city: '', age: '', gender: '', hobbies: [], userImage: '' }
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
        else if(e.target.name === 'userImage'){
            obj.userImage = e.target.files[0];
        }
        else{
          obj[e.target.name] = e.target.value;
        }
        setobj({...obj})
        console.log(obj)
      } 


      const saveData = async (e) =>{
        e.preventDefault()
        
        if(obj.id == 0){
            obj.age = Number(obj.age)
            postApi(obj)
            
        }else{
            editRecord(obj);
        }
        setobj({...blank})
        }

    const getApi = (e) => {
        axios.get("https://student-api.mycodelibraries.com/api/user/get").then((res) => {
            console.log(res);
            setarray([...res.data.data])
            // console.log(...res.data.data);  
        })
    }


    
    const postApi = (x) => {
        let formDataObj = new FormData();
        formDataObj.append('firstName' , x.firstName)
        formDataObj.append('lastName' , x.lastName)
        formDataObj.append('age' , Number(x.age))
        formDataObj.append('gender' , x.gender)
        formDataObj.append('hobbies' , x.hobbies)
        formDataObj.append('city' , x.city)
        formDataObj.append('userImage' , x.userImage)
        axios.post("https://student-api.mycodelibraries.com/api/user/add", formDataObj).then((res) => {
            getApi();
            // console.log(...res.data.data);
            console.log(res)
        })
    }


    const deleteuser =(id) => {
        axios.delete(`https://student-api.mycodelibraries.com/api/user/delete?id=${id}`).then((res) => {
        getApi();
        })  
    }

    const getId = (id) => {
        axios.get(`https://student-api.mycodelibraries.com/api/user/get-user-by-id?id=${id}`).then((res) => {
            let object  = res.data.data;
            object.id = object._id;
            object.hobbies = object.hobbies.split(',');
            // console.log(object.hobbies)  
          setobj({...object})
        })
    }

    const editRecord = (x) => {
        console.log(x)
        let formDataObj = new FormData();
        formDataObj.append('firstName' , x.firstName)
        formDataObj.append('lastName' , x.lastName)
        formDataObj.append('age' , Number(x.age))
        formDataObj.append('gender' , x.gender)
        formDataObj.append('hobbies' , x.hobbies)
        formDataObj.append('city' , x.city)
        formDataObj.append('userImage' , x.userImage)
        formDataObj.append('id' , x.id)
        axios.post(`https://student-api.mycodelibraries.com/api/user/update`, formDataObj).then((res) => {
            console.log(res);
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
                    <input type="checkbox" className='ms-3' name='hobbies' value='dance' checked={obj.hobbies?.includes('dance')} onChange={getValue}/><label>Dance</label>
                    <label htmlFor="" className='d-block'>userImage:</label>
                    <input type="file" name='userImage' id= "file" className='w-100'  onChange={getValue}/><br/>
                    <input type="submit" className='mt-3 bg-info text-light border-0 p-2' />
                </form>
            </div>
            <div>

                <table className="table table-success table-striped mt-5" id="table">
                    <thead>
                        <th>IMAGE</th>
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
                                    <td><img src={x.image} alt="" width='50px' height='50px'/></td>
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

export default ApiImage