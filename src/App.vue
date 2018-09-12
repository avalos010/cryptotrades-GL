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
  mounted() {
      const config = {
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
            componentState: {pair: '', exchange: this.$store.state.exchange}
          },
          {
            type: 'component',
            componentName: 'trades'
          }
        ]
        }]
      }
      const self = this;
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
                goldenlayoutContainer: container
              }
            });
                vm.$mount(`#${name}`)
        })

      });
    }

    registerComp('exchange-list', 'exchange');
    registerComp('pair-list', 'pairs');
    registerComp('trades', 'trades');
    myLayout.init();

  }

  }
</script>
