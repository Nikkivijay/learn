import React, { Component } from 'react'
// import logo5 from '../assets/image/17.jpg';
import './comp2.css'

export class Comp2 extends Component {
  render() {
    return (
      <>
      <div className='main'>
        <section className='sec2'>
         <h1>{this.props.title}</h1>
         <img src={this.props.img} alt="" />
         <span>{this.props.button}</span>
      </section>
      </div>
      </>
    )
  }
}

export default Comp2