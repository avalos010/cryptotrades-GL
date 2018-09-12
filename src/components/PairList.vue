<template>
  <div class="col-md-3 col-lg-3 mt-3 col-sm-12 text-center">
    <label class="text-light">Pair:</label>
    <select :disabled="!$store.state.exchange" @change="sendPair" class="form-control btn btn-dark" v-model="pair">
      <option v-for="pair in $store.state.pairs" :value="pair.symbol">{{pair.symbol}}</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: [
    'goldenlayoutContainer',
     'lastState'
  ],
  data() {
    return {
      pair: '',
    }
  },
  methods: {

  ...mapActions([ 'setPair', 'loadTrades']),
  sendPair() {
    this.goldenlayoutContainer.setState({pair: this.pair})
    this.setPair(this.lastState.pair)
    console.log(this.lastState)
    setInterval(() => this.loadTrades(), 2000);
  },

},
created() {
  // this.goldenlayoutContainer.setState({exchange: this.$store.state.exchange})
  console.log(this.$store.state)
},

}
</script>

<style lang="css">
</style>
