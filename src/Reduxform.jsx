import {useState, useEffect}from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { addstatedata, editobj} from './redux/action/Action'

function Reduxform(props) {

    const dispatch = useDispatch()
    let arr = useSelector(state => state)
    const [obj, setobj] = useState({id:0, fname: '', lname: '', email: ''})
    const [count, setcount] = useState(1)
    const blank = {id:0, fname:'', lname: '', email: ''}

    useEffect(() => {
      if(props.userid != undefined)
      {
        let editobj = arr.data.array.find(x => x.id == props.userid)
        setobj(editobj)
      }
    }, [props.userid])
    
    const getData = (e) => {
        obj[e.target.name] = e.target.value
        setobj({...obj})
        // console.log(obj)
    }


    const submtiData = (e) =>{
        if(obj.id == 0){
            setcount(count+1)
            obj.id = count
            dispatch(addstatedata(obj))
        }
        else{
            dispatch(editobj(obj))
        }
        console.log(obj);
        setobj({...blank})
    }
  return (
    <>
     <form action="" className='w-50 mt-3 mx-auto shadow-lg p-4'>
   <h2>FORM</h2>
   <label htmlFor="" className='d-block'>Fname</label>
   <input type="text" name='fname' className='w-100' value={obj.fname} onChange={getData}  />
   <label htmlFor="" className='d-block'>lname</label>
   <input type="text" name='lname' className='w-100' onChange={getData}  value={obj.lname} />
   <label htmlFor="" className='d-block'>Email</label>
   <input type="email" name='email' className='w-100' onChange={getData}  value={obj.email} />
      <button type="button" className="btn btn-success mt-4" onClick={() => submtiData()}>Save Data</button>
      </form>

    </>
  )
}

export default Reduxform