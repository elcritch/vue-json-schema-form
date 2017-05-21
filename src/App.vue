<template>
  <div id="app">
    <label>Example Model:</label>
    <pre class="has-text-left ">{{JSON.stringify(exampleModels.simple, null, 4)}}</pre>
    <br />

    <json-form
        :schema="exampleSchemas.simple"
        v-model="exampleModels.simple"
        :options="{}"
        :debug="true"
    ></json-form>

  </div>
</template>

<script>

import JsonForm from './components/json-form'

export default {
  name: 'app',
  data() {
    return {
      exampleModels: {
        simple: {

        }
      },
      exampleSchemas: {
        simple: {
          "title": "Person",
          "type": "object",
          "properties": {
            "firstName": {
              "title": "First Name",
              "type": "string"
            },
            "lastName": {
              "type": "string"
            },
            "age": {
              "description": "Age in years",
              "type": "integer",
              "minimum": 13
            },
            "netWorth": {
              "description": "individual net worth",
              "type": "integer",
            }
        },
          "required": ["firstName", "lastName"]
        }
      }
    }
  },
  methods: {
    handleUpdate(val) {
      console.log("App:handleUpdate::", JSON.stringify(val))
    },

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
