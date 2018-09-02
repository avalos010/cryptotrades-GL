<template>
  <div id="app" class="text-center">
      <div class="container">
    <div class="row">
        <ExchangeList />
        <PairList />
        <Trades />
    </div>
    </div>
  </div>
</div>
</template>

<script>
import ExchangeList from './components/ExchangeList';
import PairList from './components/PairList';
import Trades from './components/Trades'
export default {

components: {
  ExchangeList,
  PairList,
  Trades
}
  }
</script>
