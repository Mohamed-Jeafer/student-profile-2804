import { 
    CHANGE_SEARCH_FIELD, 
    REQUEST_STUDENTS_FAIL, 
    REQUEST_STUDENTS_SUCCESS, 
    REQUEST_STUDENTS_PENDING 
} from "./constants"

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const requestStudents = () => (dispatch) => {
    dispatch({type: REQUEST_STUDENTS_PENDING})
    fetch('https://api.hatchways.io/assessment/students')
      .then(response => response.json())
      .then(data => {
        dispatch({ type:REQUEST_STUDENTS_SUCCESS, payload: data.students })
      }).catch(err => dispatch({ type: REQUEST_STUDENTS_FAIL, payload: err }))
}