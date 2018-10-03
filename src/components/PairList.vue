<template>
  <div class="col-md-3 col-lg-3 mt-3 col-sm-12 text-center">
    <label class="text-light">Pair:</label>
    <select @change="sendPair" :disabled="lastState.pairs.length" class="form-control btn btn-dark" v-model="lastState.pair">
      <option v-for="pair in lastState.pairs" :value="pair.symbol">{{pair.symbol}}</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: {lastState: {}, goldenlayoutContainer: {}},
  methods: {
  ...mapActions([ 'setPair', 'loadTrades', 'loadPairs']),
  sendPair() {
    this.setPair(this.lastState.pair);

  }


},
created() {
},
computed: {
  pairs() {
    return this.$store.state.pairs
  },
  exchange() {
    return this.$store.state.exchange;
  }
},
watch: {
  exchange: async function(val) {
    await this.loadPairs()
    this.goldenlayoutContainer.extendState({pairs: this.$store.state.pairs})
  },
},
}
</script>

<style lang="css">
</style>
