import ccxt from 'ccxt';
import {LOAD_EXCHANGES, LOAD_PAIRS,LOAD_TRADES,SET_PAIR,SET_EXCHANGE}  from './mutation-types.js';
// export {loadExchanges, loadPairs, loadTrades, setExchange, setPair}

 export const loadExchanges = ({commit}) => {
  commit(LOAD_EXCHANGES, ccxt.exchanges)
}

export const loadPairs = async ({commit, state}) => {
let exchange = state.exchange;
let chosenExchange = new ccxt[exchange]({proxy: 'https://cors-anywhere.herokuapp.com/' });
let markets = await chosenExchange.load_markets();
commit(LOAD_PAIRS, markets)
console.log(markets)
}


 export const loadTrades = async ({commit, state}) => {
   const save = commit;
   const exchange = new ccxt[state.exchange]({proxy: 'https://cors-anywhere.herokuapp.com/' });
   let since = exchange.seconds () - 2

    while(since < exchange.milliseconds()) {
      const symbol = state.pair;
      const limit = 25;
      const trades = await exchange.fetchTrades(symbol, since, limit)
      if(trades.length) {
        since = trades[trades.length - 1]
        if(state.trades.length == 0 || trades[0].timestamp !== state.trades[0].timestamp)
        save(LOAD_TRADES, trades.reverse())
        console.log(trades)

      }
      else {
        commit(LOAD_TRADES, '')
        throw 'No Data Available'
        break
      }
    }
  }


   export const setExchange = ({commit, state}, exchange) => {
    commit(SET_EXCHANGE, exchange)

  }

   export const setPair = ({commit}, pair)  => {
    commit(SET_PAIR, pair)
  }
