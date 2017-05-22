<template>
  <div id="app">
    <label>Example Model:</label>
    <br />
    <span class="has-text-left ">Valid: {{exampleModels.simpleIsValid}}</span>
    <pre class="has-text-left ">{{JSON.stringify(exampleModels.simple, null, 4)}}</pre>
    <br />

    <div class="columns">
      <div class="column is-6">
      <json-form
          :schema="exampleSchemas.simple"
          v-model="exampleModels.simple"
          :valid.sync="exampleModels.simpleIsValid"
          :options="{onlyEmitValid: false, descriptionTooltips: true}"
          :debug="true"
      ></json-form>
      </div>
    </div>

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
            "marriage_status": {
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
</style>
