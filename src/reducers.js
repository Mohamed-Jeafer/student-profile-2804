import {
  CHANGE_SEARCH_FIELD,
  REQUEST_STUDENTS_FAIL,
  REQUEST_STUDENTS_SUCCESS,
  REQUEST_STUDENTS_PENDING,
} from "./constants";

const initialStateSearch = {
  searchField: "",
};

const initialSateRequest = {
  isPending: false,
  studentsList: [],
  error: "",
};

export const searchStudents = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

export const requestStudents = (state = initialSateRequest, action = {}) => {
  switch (action.type) {
    case REQUEST_STUDENTS_PENDING: {
      return { ...state, isPending: true };
    }
    case REQUEST_STUDENTS_SUCCESS: {
      return { ...state, studentsList: action.payload, isPending: false };
    }
    case REQUEST_STUDENTS_FAIL: {
      return { ...state, error: action.payload, isPending: false };
    }
    default:
      return state;
  }
};
