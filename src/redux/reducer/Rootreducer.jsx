import {First} from '../reducer/First'
import {combineReducers} from 'redux'

export const Root = combineReducers({
    data: First
})

export default Root