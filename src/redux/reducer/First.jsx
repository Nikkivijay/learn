import { GET_DATA, ADD_DATA, DELETE_DATA, EDIT_DATA } from "../type/Type";

let initialstate = {
    array: [],
    isSuccess: true
};

export const First = (state = initialstate, action) => {
    switch(action.type)
    {
    case GET_DATA:
        return state

    case ADD_DATA:
        state.array?.push(action.data)
        return{
            array : state.array
        }
    case DELETE_DATA:
        let del = state.array.findIndex(x => x.id == action.id)
        state.array.splice(del,1)
        return{
            array: state.array
        }
        case EDIT_DATA:
            let edit = state.array.findIndex(x => x.id == action.id)
            state.array.splice(edit,1,action.obj)
            return{
                array: state.array
            }    
    default:
        return {
            array: state.array,
            isSuccess: false
        }
    }
}