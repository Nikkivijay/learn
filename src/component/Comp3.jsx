import React from 'react'
import '../component/comp1.css';
import '../component/comp2.css';

function Comp3(props) {
  return (
    Array.isArray(props.img) ?
    <>
    <div className='main'>
      <section className='sec1'>
       <h1>{props.title}</h1>
       <div>
        {
          props.img?.map((x,i)=> {
            console.log(x.imgPath); 


            return <p className='p'><img src={x.imgPath} alt="" /><p>{x.dis}</p></p>
          })
          
        }
        
          {/* <p className='p'><img src={props.img[1].imgPath} alt="" /><p>{props.img[1].dis}</p></p>
          <p className='p'><img src={props.img[2].imgPath} alt="" /><p>{props.img[2].dis}</p></p>
          <p className='p'><img src={props.img[3].imgPath} alt="" /><p>{props.img[3].dis}</p></p> */}
       </div>
       <span>{props.button}</span>
    </section>
    </div>
    </>:
    <>
    <div className='main'>
        <section className='sec2'>
         <h1>{props.title}</h1>
         <img src={props.img} alt="" />
         <span>{props.button}</span>
      </section>
      </div>
  </>
  )
}

export default Comp3