import React, {  PureComponent} from 'react'

export class Purecomp extends PureComponent {
    constructor(){
        super();
        this.state={
            count:0  
        }
    }
  render() {
    console.log('oscar');
    return (
     <>
     <div>Pure Component</div>
     <h1>count: {this.state.count}</h1>
     <button onClick={() => this.setState({count: this.state.count+1})}>CLICK</button>
     </>
    )
  }
}

export default Purecomp