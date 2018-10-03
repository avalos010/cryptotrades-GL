<template lang="html">
  <div class="col-md-6 col-sm-12 col-lg-6">
    <h3 class="text-light">Trades</h3>
  <table class="table table-dark">
      <h4  v-if="vuetrades.length === 0">No Data Available</h4>
    <thead>
       <tr>
         <th scope="col">Date</th>
         <th scope="col">Price</th>
         <th scope="col">Amount</th>
         <th scope="col">Side</th>


       </tr>
    </thead>
    <tr class="text-success" :class="{'text-danger': trade.side == 'sell'}" v-for="trade in vuetrades">
      <td v-text="trade.datetime"></td>
      <td v-text="trade.price"></td>
      <td v-text="trade.amount"></td>
      <td v-text="trade.side"></td>

    </tr>

  </table>
</div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  data() {
    return {
      vuetrades: {}
    }
  },
  methods: {
    ...mapActions(['loadTrades'])
  },
props: {
  goldenlayoutContainer: {required: true},
  lastState: {required: true},
},
  computed: {
    trades() {
      return this.$store.state.trades
    },
    pair() {
      return this.$store.state.pair
    }
  },
    watch: {
      trades:function(val) {
          // console.log(val)

      },
      pair:async function(val) {
        await this.loadTrades()
        this.goldenlayoutContainer.extendState({trades: this.$store.state.trades})
        this.vuetrades = this.lastState.trades;
        setInterval(async () => {
          await this.loadTrades()
          this.goldenlayoutContainer.extendState({trades: this.$store.state.trades})
          this.vuetrades = this.lastState.trades;
        }, 2000)

      }
    }
}
</script>
