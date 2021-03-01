<template>
  <span class="toggle-wrapper" @click="toggle" role="checkbox" :aria-checked="state.toString()" tabindex="0" @keydown.space.prevent="toggle">
    <span class="toggle-background" :style="state.context.background"></span>
    <span class="toggle-indicator" :style="state.context.indicator"></span>
  </span>
</template>

<script>
import { interpret } from 'xstate';
import { ref } from 'vue'
import { toggleMachine } from '../machines/toggler'

export default {
  name: 'Toogle',
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  // computed: {
  //   backgroundStyles() {
  //     return { backgroundColor: this.state.matches("active") ? '#3490dc' : '#dae1e7'}
  //   },
  //   indicatorStyles() {
  //     return { transform: this.state.matches("active") ? 'translateX(2rem)' : 'translateX(0)'}
  //   }
  // },
  setup() {
    const toggleService = interpret(toggleMachine)
    const state = ref(toggleService.initialState)

    toggleService.onTransition(newState => {
      state.value = newState
      console.log('state: ', newState)
    }).start()
    
    const toggle = () => toggleService.send('TOGGLE')

    return {
      state,
      toggle,
    }
  }
}
</script>

<style>
.toggle-wrapper {
  display: inline-block;
  position: relative;
  cursor: pointer;
  height: 2rem;
  width: 4rem;
  border-radius: 9999px;
  margin-top: 1rem;
}
.toggle-wrapper:focus {
  outline: 0;
  box-shadow: 0 0 0 4px rgba(52,144,220,.5);
}

.toggle-background {
  display: inline-block;
  border-radius: 9999px;
  height: 100%;
  width: 100%;
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);
  transition: background-color .2s ease;
}

.toggle-indicator {
  position: absolute;
  top: .25rem;
  left: .25rem;
  height: 1.5rem;
  width: 1.5rem;
  background-color: #fff;
  border-radius: 9999px;
  box-shadow:  0 2px 4px rgba(0,0,0,0.1);
  transition: transform .2s ease;
}
</style>