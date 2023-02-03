import React, { useReducer } from 'react'

let defaultValue = 10;
    const reducer = (state, action) =>{
        switch (action.type) {
            case 'INCREMENT':
                return state + 1;
            case 'DECREMENT':
                return state -1;
            default:
                return state;
        }
    };

function Usereducer() {
    const [count, dispatch] = useReducer(reducer, defaultValue);
    return(
        <>
        <h1>{count}</h1>
        <button onClick={() => dispatch({type:'INCREMENT'})}>Increment</button>
        <button onClick={() => dispatch({type:'DECREMENT'})}>Decrement</button>
        </>
    )

}

export default Usereducer