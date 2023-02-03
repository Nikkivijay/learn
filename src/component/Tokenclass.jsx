import axios from 'axios';
import React, { Component } from 'react'

export class Tokenclass extends Component {
    constructor(){
        super();
        this.state ={
            blank : {id:0, name: '', email: '', gender: '', status: ''},
            obj: {id:0, name: '', email: '', gender: '', status: ''},
            headerObj : {
              headers : {
                'Content-Type' : 'application/json',
                "Authorization" : 'Bearer f0f0dafbaef7856c4013339fe7179a6a8d696f76d4f69b1ebf1738205e978737'
              }
            },
            array: [],
        }
        this.getValue = this.getValue.bind(this);
        this.savedata = this.savedata.bind(this);
        this.getApi = this.getApi.bind(this);
        this.postApi = this.postApi.bind(this);
        this.editrecord = this.editrecord.bind(this);
        this.deleteuser = this.deleteuser.bind(this);
        this.edituser = this.edituser.bind(this);

    }
    componentDidMount(){
      this.getApi();
    }

    getApi = () => {
      axios.get("https://gorest.co.in/public/v2/users", this.state.headerObj).then((res) => {
        this.setState({array:[...res.data]})
      })
    }

    postApi = () => {
      axios.post("https://gorest.co.in/public/v2/users",this.state.obj, this.state.headerObj). then ((res) => {
        this.getApi();
      })
    }

    getValue = (e) =>{
      this.state.obj[e.target.name] = e.target.value;
      this.setState({obj: {...this.state.obj}})
      console.log(this.state.obj)
    }

    savedata = (e) => {
      e.preventDefault()
      if(this.state.obj.id == 0){
        this.postApi(this.state.obj)
      }
      else{
        axios.patch(`https://gorest.co.in/public/v2/users/${this.state.obj.id}`,this.state.obj,this.state.headerObj).then(x=>{
        this.getApi();
      })
      }
      this.setState({obj:{id:0, name: '', email: '', gender: '', status: ''}})
      console.log(this.state.obj);
    }

    deleteuser = (id) => {
      axios.delete(`https://gorest.co.in/public/v2/users/${id}`,this.state.headerObj);
      this.getApi()
    }

    editrecord=(id)=>{
      axios.get(`https://gorest.co.in/public/v2/users/${id}`,this.state.headerObj).then((x=>{
        if(x.data.gender=="male"){
          x.data.gender="Male"
        }
        else{
          x.data.gender="Female"
        }
        if(x.data.status=="active"){
          x.data.status="Active"
        }
        else{
          x.data.status="Inactive"
        }
        let object=x.data;
        object.id=id;
        this.setState({obj:{...object}})
      }))
  }
  edituser=(id)=>{
    this.editrecord(id);
  }


  render() {
    return (
      <>
      <div>
        <form action="" id='form' className='w-50 mt-5 mx-auto shadow-lg p-3' onSubmit={this.savedata}>
          <h2>FORM</h2>
          <label htmlFor="" className='d-block'>First Name:</label>
          <input type="text" name='name' value={this.state.obj.name} className='w-100' onChange={this.getValue} />


          <label htmlFor="" className='d-block mt-3'>Email:</label>
          <input type="email" name='email' className='w-100' value={this.state.obj.email} onChange={this.getValue} />

          <label htmlFor="" className='mt-3'>Gender:</label>
          <input type="radio" className='ms-3' name='gender' value='Male' checked={this.state.obj.gender?.includes('Male')} onChange={this.getValue} /><label>Male</label>
          <input type="radio" className='ms-3' name='gender' value='Female' checked={this.state.obj.gender?.includes('Female')} onChange={this.getValue} />Female<br />

          <label htmlFor="" className='mt-3'>Status:</label>
          <input type="radio" className='ms-3' name='status' value='Active' checked={this.state.obj.status?.includes('Active')} onChange={this.getValue} /><label>Active</label>
          <input type="radio" className='ms-3' name='status' value='Inactive' checked={this.state.obj.status?.includes('Inactive')} onChange={this.getValue} />Inactive<br />
          <input type="submit" className='mt-3 bg-info text-light border-0 p-2' />
        </form>
      </div>
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
             this.state.array.map((x, i) => {
                return <tr>
                  <td>{x.id}</td>
                  {/* <td><img src={x.image} alt="" width='50px' height='50px'/></td> */}
                  <td>{x.name}</td>
                  <td>{x.email}</td>
                  <td>{x.gender}</td>
                  <td>{x.status}</td>
                  <td><button className='btn btn-danger' onClick={() => this.deleteuser(x.id)}>DELETE</button></td>
                  <td><button className='btn btn-warning' onClick={() => this.edituser(x.id)}>EDIT</button></td>
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

export default Tokenclass