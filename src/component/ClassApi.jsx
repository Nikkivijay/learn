import axios from 'axios';
import React, { Component } from 'react'

export class ClassApi extends Component {
    constructor() {
        super();
        this.state = {
            blank: {id:0, firstName: '', lastName: '', city: '', age: '', gender: '', hobbies: []},
            obj: {id:0, firstName: '', lastName: '', city: '', age: '', gender: '', hobbies: []},
            array: []
        }
        this.hobby = this.state.hobbies ? this.state.hobbies:[]

        this.getValue= this.getValue.bind(this);
        this.saveData= this.saveData.bind(this);
        this.getApi= this.getApi.bind(this);
        this.postApi= this.postApi.bind(this);
        this.deleteuser= this.deleteuser.bind(this);
        this.getbyId= this.getbyId.bind(this);
        this.editeuser= this.edituser.bind(this);
        
    }
    componentDidMount(){
        this.getApi();
    }
    getApi = () => {
        axios.get("https://student-api.mycodelibraries.com/api/student/get").then ((res) => {
            this.setState({array: [...res.data.data]})
        })
    }
    postApi = () => {
        axios.post("https://student-api.mycodelibraries.com/api/student/add",this.state.obj).then((res) => {
            this.getApi()
        })
    }
    getValue=(e) => {
        if(e.target.name == "hobbies"){
            if(e.target.checked){
                this.hobby.push(e.target.value)
            }
            else{
                this.hobby = this.hobby.filter(x => x!= e.target.value)
            }
            this.state.obj.hobbies = this.hobby 
        }
        else{
            this.state.obj[e.target.name] = e.target.value
        }
        this.setState({obj: {...this.state.obj}})
        console.log(this.state.obj);
    }
    
    saveData=(e)=>{
        e.preventDefault()
        if(this.state.obj.id == 0){
            this.postApi()
        }
        else{
            this.editRecord()
        }
        this.setState({obj:{...this.state.blank}})
        this.hobby= []
    }

    deleteuser = (id) =>{
        axios.delete(`https://student-api.mycodelibraries.com/api/student/delete?id=${id}`).then((res) => {
            this.getApi();
        })
    }

    getbyId = (id) =>{
        axios.get(`https://student-api.mycodelibraries.com/api/student/get-student-by-id?id=${id}`).then((res) => {
            let object = res.data.data;
            object.id = object._id;
            object.hobbies = object.hobbies.split(',');
            this.setState({obj:{...object}})
        })
    }
    edituser = (id) => {
        this.getbyId(id)
    }

    editRecord = () => {
        axios.post(`https://student-api.mycodelibraries.com/api/student/update`, this.state.obj).then((res)=> {
            this.getApi()
        })
    }


  render() {
    return (
      <>
       <div>
                <form action="" id='form' className='w-50 mt-5 mx-auto shadow-lg p-3' onSubmit={this.saveData}>
                    <h2>FORM</h2>
                    <label htmlFor="" className='d-block'>First Name:</label>
                    <input type="text" name='firstName' value={this.state.obj.firstName} className='w-100' onChange={this.getValue}/>
                    <label htmlFor="" className='d-block mt-3'>Last Name:</label>
                    <input type="text" name='lastName'  value={this.state.obj.lastName}className='w-100'  onChange={this.getValue}/>
                    <label htmlFor="" className='d-block mt-3'>City:</label>
                    <input type="text" name='city' className='w-100' value={this.state.obj.city}  onChange={this.getValue}/>
                    <label htmlFor="" className='d-block mt-3'>Age:</label>
                    <input type="number" name='age' className='w-100' value={this.state.obj.age} onChange={this.getValue}/>
                    <label htmlFor="" className='mt-3'>Gender:</label>
                    <input type="radio" className='ms-3' name='gender' value='Male' checked={this.state.obj.gender?.includes('Male')} onChange={this.getValue}/><label>Male</label>
                    <input type="radio" className='ms-3' name='gender' value='Female' checked={this.state.obj.gender?.includes('Female')} onChange={this.getValue}/>Female<br />
                    <label htmlFor="" className='mt-3'>Hobby:</label>
                    <input type="checkbox" className='ms-3' name='hobbies' value='read' checked={this.state.obj.hobbies?.includes('read')} onChange={this.getValue}/><label>Read</label>
                    <input type="checkbox" className='ms-3' name='hobbies' value='write' checked={this.state.obj.hobbies?.includes('write')} onChange={this.getValue}/>Write
                    <input type="checkbox" className='ms-3' name='hobbies' value='dance' checked={this.state.obj.hobbies?.includes('dance')} onChange={this.getValue}/><label>Dance</label><br/>
                    
                    <input type="submit" className='mt-3 bg-info text-light border-0 p-2' />
                </form>
            </div>
            <div>

                <table className="table table-success table-striped mt-5" id="table">
                    <thead>
                        <th>ID</th>
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
                            this.state.array?.map((x, i) => {
                                return <tr>
                                    <td>{x._id}</td>
                                    <td>{x.firstName}</td>
                                    <td>{x.lastName}</td>
                                    <td>{x.city}</td>
                                    <td>{x.age}</td>
                                    <td>{x.gender}</td>
                                    <td>{x.hobbies}</td>
                                    <td><button className='btn btn-danger' onClick={()=> this.deleteuser(x._id)}>DELETE</button></td>
                                    <td><button className='btn btn-warning' onClick={()=> this.edituser(x._id)}>EDIT</button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
      </>
    )
  }
}

export default ClassApi