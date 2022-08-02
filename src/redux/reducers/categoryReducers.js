import { GET_CATEGORIES } from "../constants/categoryConstats";


const INITIAL_STATE = {
  categories: []
}

const categoryReducers = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      }
      default:
        return state
  }
}

export default categoryReducers;