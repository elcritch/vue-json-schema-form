<template>
  <div id="app">
    <label>Example Model:</label>
    <br />
    <span class="has-text-left ">Valid: {{exampleModels.simpleIsValid}}</span>
    <pre class="has-text-left ">{{JSON.stringify(exampleModels.simple, null, 4)}}</pre>
    <br />

    <json-form
        :schema="exampleSchemas.simple"
        v-model="exampleModels.simple"
        :valid.sync="exampleModels.simpleIsValid"
        :options="{onlyEmitValid: false, descriptionTooltips: true}"
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
        },
        simpleIsValid: null
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
            "about": {
              "type": "string",
              "interface": {
                "kind": "textarea"
              }
            },
            "age": {
              "description": "Age in years",
              "type": "integer",
              "minimum": 13
            },
            "netWorth": {
              "description": "individual net worth",
              "type": "integer",
            },
            "status": {
              "type": "string",
              "enum": ["single", "married", "divorced"]
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
