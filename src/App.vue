<template>
  <div id="app">
    <json-form></json-form>
  </div>
</template>

<script>
import JsonForm from './components/json-form'

export default {
  name: 'app',
  components: {
    JsonForm
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
