<template lang="html">
  <div class="col-md-3 mt-3 col-sm-12 col-lg-3">
    <label class="text-light">Exchange:</label>
    <select @change="sendExchange" class="form-control btn btn-dark btn-block" v-model="lastState.exchange">
      <option v-for="exchange in $store.state.exchanges" :value="exchange">{{exchange}}</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    props: {lastState: {}, goldenlayoutContainer: {required: false}},
  methods: {
    ...mapActions(['loadExchanges', 'setExchange']),
    sendExchange() {
    this.setExchange(this.lastState.exchange)
        console.log(this.lastState.exchange)
    }
  },
  mounted() {
    this.loadExchanges()
  }

}
</script>
