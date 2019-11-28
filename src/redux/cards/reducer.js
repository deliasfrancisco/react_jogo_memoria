import {
  PLAY,
  PLAY_SUCCESS,
  START_GAME,
  START_GAME_SUCCESS,
  SET_CARDS
} from "../../constants/actionTypes";

const INIT_STATE = {
  cards: [],
  cardsMatched: [],
  results: [],
  loading: false
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case START_GAME:
      return { ...state };
    case START_GAME_SUCCESS:
      return { ...state, cards: action.payload.cards, results: [] };
    case PLAY:
      return { ...state };
    case PLAY_SUCCESS:
      const { cards, cardsMatched, results } = action.payload;

      return {
        ...state,
        loading: false,
        cards,
        cardsMatched,
        results
      };
    case SET_CARDS:
      return { ...state, cards: action.payload };
    default:
      return { ...state };
  }
};
