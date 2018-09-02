<template lang="html">
  <div class="col-md-6 col-sm-12 col-lg-6">
    <h3>Trades</h3>
  <table class="table table-dark">
      <h4  v-if="$store.state.trades.length == 0">No Data Available</h4>
    <thead>
       <tr>
         <th scope="col">Date</th>
         <th scope="col">Price</th>
         <th scope="col">Amount</th>
         <th scope="col">Side</th>


       </tr>
    </thead>
    <tr class="text-success" :class="{'text-danger': trade.side == 'sell'}" v-for="trade in $store.state.trades">
      <td v-text="trade.datetime"></td>
      <td v-text="trade.price"></td>
      <td v-text="trade.amount"></td>
      <td v-text="trade.side"></td>

    </tr>

  </table>
</div>
</template>

<script>
import Vuex from 'vuex';
export default {
}
</script>
