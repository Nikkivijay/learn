import axios from 'axios';
import React, { Component } from 'react'

export class Apiclassroutingtable extends Component {
    constructor(){
        super();
        this.state = {

            array: []
        }
        this.getApi = this.getApi.bind(this)
        // this.deleteuser = this.deleteuser.bind(this)
        // this.edituser = this.edituser.bind(this)
    }

    componentDidMount() {
        this.getApi();
    }

    getApi = () => {
        axios.get('https://student-api.mycodelibraries.com/api/student/get').then((res) => {
            this.setState({array:[res.data.data]})
            console.log(...res.data.data);
        })
    }

    postApi = () => {
        axios.post('https://student-api.mycodelibraries.com/api/student/add', this.state.obj).then((res) => {
        this.getApi();
    })
    }
    
    
  render() {
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
            this.state.array.map((x, i) => {
                return <tr>
                    <td>{x.firstName}</td>
                    <td>{x.lastName}</td>
                    <td>{x.city}</td>
                    <td>{x.age}</td>
                    <td>{x.gender}</td>
                    <td>{x.hobbies}</td>
                    {/* <td><button className='btn btn-danger' onClick={() => this.deleteuser(x._id)}>DELETE</button></td>
                    <td><button className='btn btn-warning' onClick={() => this.edituser(x._id)}>EDIT</button></td> */}
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

export default Apiclassroutingtable