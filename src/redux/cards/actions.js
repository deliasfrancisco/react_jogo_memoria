import {
  PLAY,
  PLAY_SUCCESS,
  START_GAME,
  START_GAME_SUCCESS,
  SET_CARDS
} from "../../constants/actionTypes";

export const startGame = () => ({
  type: START_GAME,
  payload: {}
});

export const startGameSuccess = cards => ({
  type: START_GAME_SUCCESS,
  payload: { cards }
});

export const handlePlay = ({ card }) => ({
  type: PLAY,
  payload: { card }
});

export const playSuccess = ({ cards, cardsMatched, results }) => ({
  type: PLAY_SUCCESS,
  payload: { cards, cardsMatched, results }
});

export const setCards = cards => ({
  type: SET_CARDS,
  payload: cards
});
