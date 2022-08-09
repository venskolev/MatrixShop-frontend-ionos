import axios from 'axios';
import { error } from 'console';

const addComment = () => {
  return {
    type: 'ADD_COMMENT',
    payload: {}
  };
};

export const createComments = payload => dispatch => {
  dispatch(addComment());
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': payload.token
    }
  };
  console.log("createComment:", payload.token);
  axios
    .post(`${process.env.REACT_APP_API}/products/product/${payload.id}`, payload.productData, config)
    .then(res => dispatch(res.data))
    .catch(error.message);
};
