<template>
  <div id="app">
    <json-form :schema="exampleSchemas.simple"></json-form>
  </div>
</template>

<script>
import VueBlu from 'vue-blu'
import 'vue-blu/dist/css/vue-blu.min.css'

import JsonForm from './components/json-form'

export default {
  name: 'app',
  data() {
    return {
      exampleSchemas: {
        simple: {
          "title": "Person",
          "type": "object",
          "properties": {
            "firstName": {
              "type": "string"
            },
            "lastName": {
              "type": "string"
            },
            "age": {
              "description": "Age in years",
              "type": "integer",
              "minimum": 0
            }
        },
          "required": ["firstName", "lastName"]
        }
      }
    }
  },
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
