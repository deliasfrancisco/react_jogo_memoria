import {
  PUSH_TO_RANKING_SUCCESS,
  TOGGLE_MODAL,
  TOGGLE_MODAL_SUCCESS,
  FETCH_RANKING_SUCCESS,
  FETCH_RANKING
} from "../../constants/actionTypes";

export const pushToRankingSuccess = ranking => ({
  type: PUSH_TO_RANKING_SUCCESS,
  payload: ranking
});

export const toggleModal = ({ isOpen }) => ({
  type: TOGGLE_MODAL,
  payload: isOpen
});

export const toggleModalSuccess = isOpen => ({
  type: TOGGLE_MODAL_SUCCESS,
  payload: isOpen
});

export const fetchRanking = ranking => {
  return {
    type: FETCH_RANKING,
    payload: ranking
  };
};

export const fetchRankingSuccess = ranking => ({
  type: FETCH_RANKING_SUCCESS,
  payload: ranking
});
