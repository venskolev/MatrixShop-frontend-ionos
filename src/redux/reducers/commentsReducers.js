import { ADD_COMMENT, DELETE_COMMENT } from "../constants/commentsConstants";
const INITIAL_STATE = {
  comment: []
}



const commentsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        comment: [...action.payload]
      }
      case DELETE_COMMENT:
      return {
        comment: [...action.payload]
      }
      default:
        return state;
  }
}


export default commentsReducer;