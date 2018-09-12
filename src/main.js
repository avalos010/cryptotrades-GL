import $ from 'jquery'

window.$ = $;
import Vue from 'vue'
import App from './App.vue'
import store from './store'

import ExchangeList from './components/ExchangeList';
import PairList from './components/PairList';
import Trades from './components/Trades';

import 'bootstrap/dist/css/bootstrap.css'
import 'golden-layout/src/css/goldenlayout-base.css'
import 'golden-layout/src/css/goldenlayout-dark-theme.css'

Vue.component('app',App);
Vue.component('exchange-list', ExchangeList);
Vue.component('pair-list', PairList);
Vue.component('trades', Trades);


new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
