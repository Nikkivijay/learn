import React,{useState, useReducer, useRef} from 'react'


function  ReducerCrud() {
let ref = useRef()
const Reduce = async(state, action) => {
  switch(action.type){
    case 'SUBMIT':
      if(obj.id == 0){
        setcount(count+1)
        obj.id=count
        arr.push(obj)
      }
      else{
        let edit = arr.findIndex(x => x.id == action.id)
        arr.splice(edit,1,obj)
      }
      setarr([...arr])
      setobj({...blank});
      ref.current.value = null
      // const file = document.querySelector('#file').value = null;
      // obj.file = await toBase64(file);

      return arr;

      case 'Delete':
        let del = arr.findIndex(x => x.id == action.id);
        arr.splice(del,1);
        setarr([...arr])
        return arr;

      case 'Edit':
        let edit = arr.find(x => x.id == action.id)
        setobj({...edit})
        return obj;
      
      default:
        return arr;
  }
}

  const blank = {id: 0, file: '' , fname: '', lname: '', email: '', password: '', city: '', date: '', gender: '', hobby: []}

  const [obj,setobj] = useState({...blank});
  const [arr, setarr] = useState([]);
  const [count , setcount] = useState(1);
  const [dis, dispatch] = useReducer(Reduce, arr)
  let hby = obj.hobby ? obj.hobby:[]


  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});
  
  const getValue = async (e) => {
    if(e.target.name== 'hobby'){
      if(e.target.checked){
        hby.push(e.target.value);
      }
      else{
        hby=hby.filter(x => x != e.target.value)
      }
      obj.hobby = hby;
    }
    else if(e.target.name == 'file')
    {
      let aa  = await toBase64(e.target.files[0]);
      obj.file = aa;
      console.log(aa)
      // e.target.value = null;
    }
    else{
    obj[e.target.name] = e.target.value;
    }
    setobj({...obj});
  }

  return (
    <>
    <div>
        <form action="" id='form' className='w-50 mt-5 mx-auto shadow-lg p-3'>
            <h2>FORM</h2>
            <label htmlFor="" className='d-block'>First Name:</label>
            <input type="text" name='fname' value={obj.fname} className='w-100' onChange={getValue}/>
            <label htmlFor="" className='d-block mt-3'>Last Name:</label>
            <input type="text" name='lname' value={obj.lname} className='w-100'  onChange={getValue}/>
            <label htmlFor="" className='d-block mt-3'>Email:</label>
            <input type="email" name='email' value={obj.email} className='w-100'  onChange={getValue}/>
            <label htmlFor="" className='d-block mt-3'>Password:</label>
            <input type="password" name='password' value={obj.password} className='w-100' onChange={getValue}/>
            <label htmlFor="" className='d-block mt-3'>City:</label>
            <input type="text" name='city' className='w-100' value={obj.city} onChange={getValue}/>
            <label htmlFor="" className='d-block mt-3'>Date:</label>
            <input type="date" name='date' className='w-100' value={obj.date}  onChange={getValue}/>
            <label htmlFor="" className='mt-3'>Gender:</label>
            <input type="radio" className= 'ms-3' name='gender' value='Male' checked={obj.gender?.includes('Male')} onChange={getValue}/><label>Male</label>
            <input type="radio" className= 'ms-3' name='gender' value='Female' checked={obj.gender?.includes('Female')} onChange={getValue}/>Female<br/>
            <label htmlFor="" className='mt-3'>Hobby:</label>
            <input type="checkbox" className='ms-3' name='hobby' value='read' checked={obj.hobby?.includes('read')} onChange={getValue}/><label>Read</label>
            <input type="checkbox" className='ms-3' name='hobby' value='write' checked={obj.hobby?.includes('write')} onChange={getValue}/>Write
            <input type="checkbox" className='ms-3' name='hobby' value='dance' checked={obj.hobby?.includes('dance')} onChange={getValue}/><label>Dance</label><br/>
            <input type="file" name='file' id= "file" ref={ref} className='w-100' onChange={getValue}/> 
            <input type="button"  value='SUBMIT' className='mt-3 bg-info text-light border-0 p-2' onClick={() => dispatch({type: 'SUBMIT', id: obj.id})}/>
        </form>
    </div>
    <div>
      
    <table  className="table table-success table-striped mt-5" id="table">
        <thead>
            <th>ID</th>
            <th>IMAGE</th>
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
        </thead>
        <tbody>
        {
        arr?.map((x, i) => {
            return <tr key={i}>
              <td>{x.id}</td>
              <td><img src={x.file} style={{width: '50px'}}/></td>
              <td>{x.fname}</td>
              <td>{x.lname}</td>
              <td>{x.email}</td>
              <td>{x.password}</td>
              <td>{x.city}</td>
              <td>{x.date}</td>
              <td>{x.gender}</td>
              <td>{x.hobby?.join(',')}</td>
              
              <td><button className='btn btn-warning' onClick={() => dispatch({type: 'Edit', id: x.id})}>EDIT</button></td>
              <td><button className='btn btn-danger'  onClick={() => dispatch({type: 'Delete', id: x.id})}>DELETE</button></td>
              </tr>
        })
    }
        </tbody>
    </table>
    </div>
    </>
  )
}

export default ReducerCrud