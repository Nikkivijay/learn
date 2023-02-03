import React, { Component } from 'react'

export class Classlifecycle extends Component {
constructor(){
    super()
    console.log('constructor');
}
static getDerivedStateFromProps()
{
    console.log('getDerivedStateFromProps')
}

componentWillUnmount(){
    console.log('componentWillUnmount')
}
shouldComponentUpdate(){
    console.log('shouldComponentUpdate');
    return true;
}
getSnapshotBeforeUpdate(){
    console.log('getSnapshotBeforeUpdate')
}
// unmounting
componentDidMount(){
    console.log('componentDidMount');
}
  render() {
    console.log('render');
    return (
      <>
        <h2>Life Cycle On Class Component</h2>
      </>
    )
  }
}

export default Classlifecycle