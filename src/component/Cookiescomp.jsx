import React,{useState} from 'react'
import { useCookies } from 'react-cookie';

function Cookiescompo() {
  const [name, setName] = useState('oscar');
  const [pwd, setPwd] = useState('123');
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
    const handle = () => {
        setCookie('Name', name, { path: '/' });
        setCookie('Password', pwd, { path: '/' });
        window.location.reload();
     };
     
  return (

    <>
    <button onClick={() => console.log(cookies)}>get cookies</button>
    <br />
    <button onClick={() => {removeCookie('Name');removeCookie('Password');window.location.reload()}}>Remove cookies</button>
    <br />
    <button onClick={handle}>set cookies</button>
    </>
  )
}

export default Cookiescompo;