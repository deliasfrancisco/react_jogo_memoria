import {
  TOGGLE_MODAL,
  TOGGLE_MODAL_SUCCESS
} from "../../constants/actionTypes";

const INIT_STATE = {
  ranking: [],
  isOpen: true
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return { ...state, isOpen: action.payload };
    case TOGGLE_MODAL_SUCCESS:
      return { ...state, isOpen: action.payload };
    default:
      return { ...state };
  }
};
