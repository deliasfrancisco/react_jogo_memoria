import {
  SET_USERNAME,
  SET_USERNAME_SUCCESS
} from "../../constants/actionTypes";

const INIT_STATE = {
  username: ""
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return { ...state, username: action.payload };
    case SET_USERNAME_SUCCESS:
      return { ...state, username: action.payload };
    default:
      return { ...state };
  }
};
