import {Root} from '../reducer/Rootreducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {applyMiddleware,createStore} from "redux"
// import { Thunk } from 'thunk'


export const store=createStore(Root,composeWithDevTools(applyMiddleware(thunk)))