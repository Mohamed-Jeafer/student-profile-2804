import { CHANGE_SEARCH_FIELD } from "./constants"


const initialSate = {
    searchField: ''
}

export const searchStudents = (state=initialSate, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD: 
            return  {...state, searchField: action.payload}
        default:
            return state
    }
}