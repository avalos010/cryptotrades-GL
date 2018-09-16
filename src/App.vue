<template>
  <div id="app" class="text-center">
      <div class="w-full h-screen" id="golden">


  </div>
</div>
</template>

<script>
import Vue from 'vue'
import GoldenLayout from 'golden-layout';
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      pairs: []
    }
  },
  mounted() {
      let config = {
        content: [{
          type: 'row',
          content: [
            {
            type:'component',
            componentName: 'exchange',
            componentState: {exchange: ''}
          },
          {
            type: 'component',
            componentName: 'pairs',
            componentState: {pair: '', pairs: []}
          },
          {
            type: 'component',
            componentName: 'trades'
          }
        ]
        }]
      }
      const self = this;
      let savedState = localStorage.getItem('savedState');
    config = savedState !== null ? JSON.parse(savedState) : config;

      const myLayout = new GoldenLayout(config, $('#golden'));

      function registerComp(name,componentName){
      myLayout.registerComponent(componentName, function(container, state){
        container.getElement().html(`<div id="${name}"></div>`)
        setTimeout(() => {
            const ExchangeListConstructor = Vue.component(name).extend({
              store: self.$store
            });
            const vm = new ExchangeListConstructor({
              propsData: {
                lastState: state || {},
                goldenlayoutContainer: container,
                pairs: []
              }
            });
                vm.$mount(`#${name}`)
        })

      });
        // myLayout.init()
    }
        myLayout.on('stateChanged', function () {
    let state = JSON.stringify(myLayout.toConfig());
    localStorage.setItem('savedState', state);
});
    registerComp('pair-list', 'pairs');
    registerComp('exchange-list', 'exchange');
    registerComp('trades', 'trades');


    myLayout.init();

  },
  methods: {
        resetLayout(){
            localStorage.removeItem('savedState');
            window.location.reload(true);
        },
        setpairs() {
          this.pairs = this.$store.state.pairs
        }
  }

  }
</script>
