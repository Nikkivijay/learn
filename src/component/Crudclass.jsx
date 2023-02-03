import React, { Component } from 'react'
import { useState } from 'react';

export class Crudclass extends Component {

  constructor() {
    super();

    this.state = {
      array: [],
      blankObj : {id:0 , fname :'' , lname: '' , email: '', password: '', city: '', date: '', gender:'' , hobby:[]},
      obj : {},
      hby : [],
      count : 1
  }
  this.state.obj = {...this.state.blankObj}
  this.getValue = this.getValue.bind(this);
  this.saveData = this.saveData.bind(this);
  this.edituser = this.edituser.bind(this);
  this.deleteuser = this.deleteuser.bind(this);
}

getValue(e){
  if(e.target.name == 'hobby'){
      if(e.target.checked){
          this.state.hby.push(e.target.value)
      }
      else{
          this.state.hby = this.state.hby.filter(x => x != e.target.value);
      }
      this.state.obj.hobby = this.state.hby;
  }
  else{
      this.state.obj[e.target.name] = e.target.value;
  }
  this.setState({obj : {...this.state.obj}})
}

saveData(e){
  e.preventDefault();
  if(this.state.obj.id == 0){
      this.setState({count : this.state.count+1});
      this.state.obj.id = this.state.count;
      this.state.array.push(this.state.obj)
  }
  else{
      let index = this.state.array.findIndex(x => x.id == this.state.obj.id)
      this.state.array.splice(index , 1 , this.state.obj)
  }
  this.setState({array : [...this.state.array]});
  this.state.hby = [];
  this.setState({obj : {...this.state.blankObj}})
}

edituser(id){
  let editObj = this.state.array.find(x => x.id == id)
  this.state.hby = editObj.hobby;
  this.setState({obj : editObj});
}

deleteuser(id){
  let index = this.state.array.findIndex(x => x.id == id)
  this.state.array.splice(index , 1)
  this.setState({array : [...this.state.array]})
}
  render() {
    return (
      <>
            <div>
          <form action="" id='form' className='w-50 mt-5 mx-auto shadow-lg p-3' onSubmit= {this.saveData}>
            <h2>FORM</h2>
            <label htmlFor="" className='d-block'>First Name:</label>
            <input type="text" name='fname' className='w-100' value={this.state.obj.fname} onChange={this.getValue}/>
            <label htmlFor="" className='d-block mt-3'>Last Name:</label>
            <input type="text" name='lname' className='w-100'  value={this.state.obj.lname} onChange={this.getValue}/>
            <label htmlFor="" className='d-block mt-3'>Email:</label>
            <input type="email" name='email' className='w-100'  value={this.state.obj.email} onChange={this.getValue}/>
            <label htmlFor="" className='d-block mt-3'>Password:</label>
            <input type="password" name='password' className='w-100'  value={this.state.obj.password} onChange={this.getValue}/>
            <label htmlFor="" className='d-block mt-3'>City:</label>
            <input type="text" name='city' className='w-100'  value={this.state.obj.city} onChange={this.getValue}/>
            <label htmlFor="" className='d-block mt-3'>Date:</label>
            <input type="date" name='date' className='w-100'  value={this.state.obj.date} onChange={this.getValue}/>
            <label htmlFor="" className='mt-3'>Gender:</label>
            <input type="radio" className= 'ms-3' name='gender' value='Male' checked={this.state.obj.gender.includes('Male')} onChange={this.getValue}/><label>Male</label>
            <input type="radio" className= 'ms-3' name='gender' value='Female' checked={this.state.obj.gender.includes('Female')} onChange={this.getValue}/>Female<br/>
            <label htmlFor="" className='mt-3'>Hobby:</label>
            <input type="checkbox" className='ms-3' name='hobby' value='read'  checked={this.state.obj.hobby?.includes('read')} onChange={this.getValue}/><label>Read</label>
            <input type="checkbox" className='ms-3' name='hobby' value='write' checked={this.state.obj.hobby?.includes('write')} onChange={this.getValue}/>Write
            <input type="checkbox" className='ms-3' name='hobby' value='dance' checked={this.state.obj.hobby?.includes('dance')} onChange={this.getValue}/><label>Dance</label><br/>
            <input type="submit" className='mt-3 bg-info text-light border-0 p-2'/>
        </form>
    </div>
    <div>
      
    <table className="table table-success table-striped mt-5" id="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>EMAIL</th>
            <th>PASSWORD</th>
            <th>CITY</th>
            <th>DATE</th>
            <th>GENDER</th>
            <th>HOBBY</th>
            <th>EDIT</th>
            <th>DELETE</th>
            </tr>
        </thead>
        <tbody>
        {
        this.state.array.map((x, i) => {
            return <tr key = {i}>
              <td>{x.id}</td>
              <td>{x.fname}</td>
              <td>{x.lname}</td>
              <td>{x.email}</td>
              <td>{x.password}</td>
              <td>{x.city}</td>
              <td>{x.date}</td>
              <td>{x.gender}</td>
              <td>{x.hobby?.join(',')}</td>
              <td><button className='btn btn-warning' onClick={() => this.edituser(x.id)}>EDIT</button></td>
              <td><button className='btn btn-danger' onClick={() => this.deleteuser(x.id)}>DELETE</button></td>
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

export default Crudclass