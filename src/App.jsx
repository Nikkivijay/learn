
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Comp1 from './component/Comp1';
import Comp2 from './component/Comp2';
import logo5 from '../src/assets/image/17.jpg';
import logo6 from '../src/assets/image/18.jpg';
import logo7 from '../src/assets/image/27.jpg';
import Comp3 from './component/Comp3';
// import {State, Stateobj} from './component/State';
import Event from './component/Event';
import Form from './component/Formhandling';
import Formhandling from './component/Formhandling';
import Form1 from './component/Form1';
import Usecontext from './component/Usecontext';
import Useref from './component/Useref';
import Cookiescompo from './component/Cookiescomp';
import Crudclass from './component/Crudclass';
import Classlifecycle from './component/Classlifecycle';
import Localstoragecrud from './component/Localstoragecrud';
import Localstoragecls from './component/Localstoragecls';
import Routetable from './component/Routetable';
import Routeform from './component/Routeform';
import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom';
import Register from './component/Register';
import Login from './component/Login';
import Profile from './component/Profile';
import Error from './component/Error';
import TableCom from './component/TableCom';
import Usememo from './component/Usememo';
import Purecomp from './component/Purecomp';
import Usereducer from './component/Usereducer';
import ReducerCrud from './component/ReducerCrud';
import Apicall from './component/Apicall';
import ApiImage from './component/ApiImage';
import Tokenfunction from './component/Tokenfunction';
import ClassApi from './component/ClassApi';
import Tokenclass from './component/Tokenclass';
import Apifunroutingform from './component/Apifunroutingform';
import Apifunroutingtable from './component/Apifunroutingtable';
import Apiclassroutingtable from './component/Apiclassroutingtable';
import Apiclassroutingform from './component/Apiclassroutingform';
import Tokenfunroutingform from './component/Tokenfunroutingform';
import Tokenfunroutingtable from './component/Tokenfunroutingtable';
import { useState } from 'react';
import Reduxform from './Reduxform';
import Reduxtable from './Reduxtable';
import { useSelector } from 'react-redux';




// let array = [{
//   title: 'Discover your home',
//   img: logo5,
//   button: 'Wardrobe Refresh Sale'
// },
// {
//   title: 'Your wedding special',
//   img: logo6,
//   button: 'See more',
// },
// {
//   title: 'For all birthday gifting and celebration',
//   img: logo7,
//   button: 'See more',
// },
// {
//   title: 'Revamp your home in style',
//   img: [
//     {
//       imgPath : require ('./assets/image/1.jpg'),
//       dis: 'Bedsheets, curtains & more'
//     },
//     {
//       imgPath : require ('./assets/image/2.jpg'),
//       dis: 'Home decoration'
//     },
//     {
//       imgPath : require ('./assets/image/3.jpg'),
//       dis: 'Home storage'
//     },
//     {
//       imgPath : require('./assets/image/4.jpg'),
//       dis: 'Lighting solution'
//     },
//   ],
//   button: 'Explore all',
// },
// {
//   title: '50% off | Styles for Women',
//   img: [
//     {
//       imgPath : require ('./assets/image/5.jpg'),
//       dis: ' Womens clothing'
//     },
//     {
//       imgPath : require ('./assets/image/6.jpg'),
//       dis: 'Footwear+Handbagss'
//     },
//     {
//       imgPath : require ('./assets/image/7.jpg'),
//       dis: 'Beauty'
//     },
//     {
//       imgPath : require('./assets/image/8.jpg'),
//       dis: 'Fashion jewellery'
//     },
//   ],
//   button: 'Explore all',
// },
// {
//   title: 'Electronics devices for home',
//   img: [
//     {
//       imgPath : require ('./assets/image/13.jpg'),
//       dis: 'Smartwatch'
//     },
//     {
//       imgPath : require ('./assets/image/14.jpg'),
//       dis: 'Tablets'
//     },
//     {
//       imgPath : require ('./assets/image/15.jpg'),
//       dis: 'Laptops'
//     },
//     {
//       imgPath : require('./assets/image/16.jpg'),
//       dis: 'Monitors'
//     },
//   ],
//   button: 'See more',
// },
// ]
function App() {

  let arr = useSelector(state => state)
  const [userid, setuserid] = useState()
  let edit = (id) => {
    setuserid(id)
  }

  return (
    <>
      {/* {
    array.map(x =>{
      return(
      <Comp3  title = {x.title}  img = {x.img}  button = {x.button}/>
      )
    })
  } */}

      {/* <State/> */}
      {/* <Stateobj/> */}
      {/* <Event/> */}
      {/* <Formhandling/> */}
      {/* <Form1 /> */}
      {/* <Usecontext/> */}
      {/* <Useref/> */}
      {/* <Cookiescompo/> */}
      {/* <Crudclass/> */}
      {/* <Classlifecycle/> */}
      {/* < Localstoragecrud/> */}
      {/* <Localstoragecls/> */}

      {/* <BrowserRouter>
        <button type='submit' style={{ padding: '5px', margin: '10px', fontWeight: 'bold' }}><NavLink to = '/ '>FORM</NavLink></button>

        <button type='submit' style={{ padding: '5px', margin: '10px', fontWeight: 'bold' }}><NavLink to = '/table '>TABLE</NavLink></button>
        <Routes>
          <Route path='/' element={<Routefom />}></Route>
          <Route path='/table' element={<Routetable />}></Route>
        </Routes>
      </BrowserRouter> */}

      {/* <Register/> */}
      {/* <Login/> */}
      {/* <Profile/> */}

      {/* <BrowserRouter>
        <Routes>
          {
            localStorage.getItem('LoginUser') ? 
            <>
                <Route path='/' element={<Navigate to='/profile' />} />
                <Route path='/login' element={<Navigate to='/profile' />} />
            </>:
            <>
              <Route path='/profile' element={<Navigate to='/login' />} />
            </>
          }
          <Route path='/' element= {<Register/>}/>
          <Route path='/login' element= {<Login/>}/>
          <Route path='/profile' element= {<Profile/>}/>
          <Route path='/*' element= {<Error/>}/>

        </Routes>
       </BrowserRouter> */}

      {/* <BrowserRouter>
       <NavLink to='/'>FORM</NavLink><br/>
       <NavLink to='/table'>TABLE</NavLink>
       <Routes>
       <Route path='/' element={<Form1/>}></Route>
       <Route path='/table' element={<TableCom/>}></Route>
       </Routes>
       </BrowserRouter> */}

      {/* <Purecomp/> */}
      {/* <Usememo/> */}
      {/* <Usereducer/> */}
      {/* <ReducerCrud/> */}
      {/* <Apicall/> */}
      {/* <ApiImage/> */}
      {/* <Tokenfunction/> */}
      {/* <ClassApi/> */}
      {/* <Tokenclass/> */}
      {/* <BrowserRouter>
        <NavLink to='/'>FORM</NavLink><br />
        <NavLink to='/table'>TABLE</NavLink>
        <Routes>
          <Route path='/' element={<Apifunroutingform />}></Route>
          <Route path='/table' element={<Apifunroutingtable />}></Route> 
        </Routes>
      </BrowserRouter> */}

      {/* <BrowserRouter>
        <NavLink to='/'>FORM</NavLink><br />
        <NavLink to='/table'>TABLE</NavLink>
        <Routes>
          <Route path='/' element={<Apiclassroutingform />}></Route>
          <Route path='/table' element={<Apiclassroutingtable />}></Route> 
        </Routes>
      </BrowserRouter> */}



      {/* <BrowserRouter>
        <NavLink to='/'>FORM</NavLink><br />
        <NavLink to='/table'>TABLE</NavLink>
        <Routes>
          <Route path='/' element={<Tokenfunroutingform />}></Route>
          <Route path='/table' element={<Tokenfunroutingtable />}></Route> 
        </Routes>
      </BrowserRouter> */}

      <Reduxform userid={userid}/>
      <Reduxtable edit = {edit}/>
      
    </>
  );
}
export default App;
export let array1 = [];
export let count1 = { num: 0 };
export let obj1 = { obj: { id: 0, fname: '', lname: '', email: '', password: '', city: '', date: '', gender: '', hobby: [] } }