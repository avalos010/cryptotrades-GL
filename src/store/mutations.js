// import * as types from './mutation-types';

import {LOAD_PAIRS,LOAD_TRADES,LOAD_EXCHANGES, SET_PAIR,SET_EXCHANGE} from './mutation-types'

export const mutations = {
[LOAD_EXCHANGES](state, payload) {
  state.exchanges = payload;
},

[LOAD_PAIRS](state, payload) {
  state.pairs = payload
},

[LOAD_TRADES](state, payload) {
  state.trades = payload;
},
[SET_EXCHANGE](state, payload) {
  state.exchange = payload
},
[SET_PAIR](state, payload) {
  state.pair = payload;
}
}
