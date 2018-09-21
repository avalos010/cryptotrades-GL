<template>
  <div class="col-md-3 col-lg-3 mt-3 col-sm-12 text-center">
    <label class="text-light">Pair:</label>
    <select :disabled="lastState.pairs.length" class="form-control btn btn-dark" v-model="pair">
      <option v-for="pair in lastState.pairs" :value="pair.symbol">{{pair.symbol}}</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: {
    lastState: {required:false},
    goldenlayoutContainer: {required:false}
},
  data() {
    return {
        pair: '',
    }
  },
  methods: {
  ...mapActions([ 'setPair', 'loadTrades', 'setExchange', 'loadPairs']),


},
created() {
  console.log(this.pairs)
},
computed: {
  pairs() {
    return this.$store.state.pairs
  }
},
watch: {
  pair: function(val) {
    this.goldenlayoutContainer.extendState({pair: val})
    console.log(this.lastState.pair)
    this.setPair(this.lastState.pair);
    
  },
  exchange: function(val) {
    console.log(val)
  },
  pairs: function(val) {
    this.goldenlayoutContainer.extendState({pairs: val})
    console.log(this.lastState.pairs)
  }
},
}
</script>

<style lang="css">
</style>
