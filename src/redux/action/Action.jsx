import { GET_DATA, ADD_DATA, DELETE_DATA, EDIT_DATA } from "../type/Type";

const getdata = () => {
    return {
        type: GET_DATA
    }
}

const adddata = (data) => {
    return {
        type: ADD_DATA,
        data: data
    }
}

const editdata = (obj) => {
    return {
        type: EDIT_DATA,
        obj: obj
    }
}

const deletedata = (id) => {
    return {
        type: DELETE_DATA,
        id: id
    }
}

export const getstatedata = () => {
    return()=>{ 
        getdata()
    }
}

export const addstatedata = (data) => {
    return(dispatch)=>{
        dispatch(adddata(data))
    }
}

export const editobj = (obj) => {
    return(dispatch)=>{
        dispatch(editdata(obj))
    }
}

export const deleteuser = (id) => {
    return(dispatch)=>{
        dispatch(deletedata(id))
    }
}