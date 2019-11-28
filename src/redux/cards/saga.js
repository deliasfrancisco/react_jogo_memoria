import { PLAY, START_GAME } from "../../constants/actionTypes";
import { head, last } from "ramda";
import {
  all,
  call,
  fork,
  put,
  takeEvery,
  select,
  delay
} from "redux-saga/effects";

import {
  GAME_COMPLETED,
  CARDS_MISMATCH,
  CARDS_MATCH
} from "./../../constants/messages";

import { playSuccess, startGameSuccess, setCards } from "./actions";
import { pushToRankingSuccess } from "./../ranking/actions";
import { pushToRanking, fetchRanking } from "./../../firebase/cards/index";
import { success, error, warning } from "../../utils/Alerts";

// Gerar lista de cartas embaralhadas
const generateCards = async () => {
  // Gerar as 10 cartas iniciais
  const numbersArray = Array.apply(null, { length: 11 })
    .map(Number.call, Number)
    .slice(1, 11);

  // embaralhar as cartas
  const shuffledCards = shuffleArray(numbersArray.concat(numbersArray));

  // Criar a lista de cartas
  const cards = [];
  for (let id = 0; id < 20; id++) {
    const card = {
      id,
      cardNumber: shuffledCards[id],
      visible: false
    };
    cards.push(card);
  }

  return cards;
};

const shuffleArray = array => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // enquanto ainda tem elementos a serem embaralhados
  while (0 !== currentIndex) {
    // selecionar elemento restante aleatorio
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // trocar com o elemento atual
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

function* startGame() {
  const cards = yield call(generateCards);
  yield put(startGameSuccess(cards));
}

function* setVisible(cards, card) {
  const index = cards.indexOf(card);
  cards[index] = { ...cards[index], visible: true };
  yield put(setCards(cards));
}

function* checkGameCompletion() {
  const state = yield select(state => state.cards);
  return state.cardsMatched.length == 10;
}

function* play({ payload }) {
  const { card } = payload;

  // só permitir jogadas com cartas ainda não reveladas
  if (card.visible) return;

  // buscar do state
  const state = yield select(state => state.cards);
  const { cardsMatched, results } = state;
  const { cards } = state;

  // marcar a carta como visível
  yield call(setVisible, cards, card);

  // cartas visíveis que ainda não foram definidas como corretas
  const visibleAndNotMatched = card =>
    card.visible && !cardsMatched.includes(card.cardNumber);

  const visibleCards = cards.filter(visibleAndNotMatched);

  // Se houverem 2 cartas reveladas e forem iguais, permanecerão visíveis.
  if (matches(visibleCards)) {
    // Notificar score para o usuario
    success(CARDS_MATCH);

    // contabilizar o acerto
    yield put(
      playSuccess({
        cards,
        cardsMatched: [...cardsMatched, head(visibleCards).cardNumber],
        results: [...results, true]
      })
    );

    // verificar se completou o jogo
    if (yield call(checkGameCompletion)) {
      const results = yield select(state => state.cards.results);
      //const { username } = payload;

      // computar o score do usuario no ranking
      //yield call(pushToRanking, username, results.length);
      const ranking = yield call(fetchRanking);

      // enviar o ranking
      yield put(pushToRankingSuccess(ranking));

      // Notificar score para o usuario
      //success(GAME_COMPLETED(results.length));
    }
  } else if (visibleCards.length === 2) {
    const setInvisible = card => {
      const index = cards.indexOf(card);
      cards[index] = { ...cards[index], visible: false };
    };

    // Notificar erro para o usuario
    error(CARDS_MISMATCH);

    yield delay(700);

    // esconder cartas
    visibleCards.map(setInvisible);

    // contabilizar o erro
    yield put(
      playSuccess({ cards, cardsMatched, results: [...results, false] })
    );
  }
}

const matches = visibleCards => {
  if (visibleCards.length !== 2) return;

  const { cardNumber: first } = head(visibleCards);
  const { cardNumber: second } = last(visibleCards);
  return first === second;
};

export function* watchStartGame() {
  yield takeEvery(START_GAME, startGame);
}

export function* watchPlay() {
  yield takeEvery(PLAY, play);
}

export default function* rootSaga() {
  yield all([fork(watchStartGame), fork(watchPlay)]);
}
