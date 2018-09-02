<template>
  <div class="col-md-3 col-lg-3 mt-3 col-sm-12">
    <label>Pair:</label>
    <select :disabled="!$store.state.exchange" @change="sendPair" class="form-control btn btn-dark" v-model="pair">
      <option v-for="pair in $store.state.pairs" :value="pair.symbol">{{pair.symbol}}</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      pair: '',
    }
  },
  methods: {

  ...mapActions([ 'setPair', 'loadTrades']),
  sendPair() {
    this.setPair(this.pair)
    this.loadTrades()
  },

},

}
</script>

<style lang="css">
</style>
