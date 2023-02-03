import React from 'react'
import logo1 from '../assets/image/1.jpg';
import logo2 from '../assets/image/2.jpg';
import logo3 from '../assets/image/3.jpg';
import logo4 from '../assets/image/4.jpg';
import './comp1.css';

function Comp1() {
  return (
    <>
      <div className='main'>
        <section className='sec1'>
         <h1>Top picks for your home</h1>
         <div>
            <p className='p'><img src={logo1} alt="" /><p>img-1</p></p>
            <p className='p'><img src={logo2} alt="" /><p>img-2</p></p>
            <p className='p'><img src={logo3} alt="" /><p>img-3</p></p>
            <p className='p'><img src={logo4} alt="" /><p>img-4</p></p>
         </div>
         <span>see more</span>
      </section>
      </div>
    </>
  )
}

export default Comp1