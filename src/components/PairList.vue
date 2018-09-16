<template>
  <div class="col-md-3 col-lg-3 mt-3 col-sm-12 text-center">
    <label class="text-light">Pair:</label>
    <select :disabled="pairs.length" @change="sendPair" class="form-control btn btn-dark" v-model="pair">
      <option v-for="pair in pairs" :value="pair.symbol">{{pair.symbol}}</option>
    </select>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  props: [
    'goldenlayoutContainer',
     'lastState',
     'pairs'
  ],
  data() {
    return {
        pair: this.lastState.pair,
    }
  },
  methods: {
  ...mapActions([ 'setPair', 'loadTrades']),
  ...mapGetters(['loadedPairs']),
  sendPair() {
    this.goldenlayoutContainer.extendState({pair: this.pair})
    // this.goldenlayoutContainer.extendState({pairs: this.$store.state.pairs})
      this.setPair(this.pair)
       console.log('gl-pairs',this.lastState.pairs)
      console.log('gl-pair',this.lastState.pair)
      
  setInterval(() => this.loadTrades(), 2000);
  },
},

  componentUpdated() {
  alert('updated')
}

}


</script>

<style lang="css">
</style>
