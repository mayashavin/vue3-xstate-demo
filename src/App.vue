<template>
  <Toggle />
  <!-- <div>Toogle mode: {{toggleMode.value}}</div> -->
</template>

<script>
import Toggle from './components/Toggle.vue'
// import { useToggleMachine } from './services/toggleService'

export default {
  name: 'App',
  components: {
    Toggle
  },
  // setup() {
  //   const { state } = useToggleMachine()

  //   return {
  //     toggleMode: state
  //   }
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
