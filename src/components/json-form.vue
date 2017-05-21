<template>
  <div class="card is-fullwidth ">
    <div class="card-content ">
      <!-- <labeled-field class="" name="Title:" :value="schema.title">
      </labeled-field> -->

      <div class="media">
        <div class="media-content">
          <label class="title" v-if="schema.title"> {{schema.title}} </label>

          <property-field v-for="(item, name) in schema.properties"
              :key="name"
              :name="name"
              :json-property="item"
              :options="{prettyField: true}"
          >
          </property-field>
        </div>
      </div>
    </div>

    <footer class="card-footer">

      <div class="">
        <label class="is-pulled-left">Info:</label>
        <br />
        <labeled-field name="Type:" :value="schema.type" v-if="debug">
        </labeled-field>
        <labeled-field name="Required:" :value="schema.required " v-if="debug">
        </labeled-field>
      </div>

      <pre class="is-pulled-left has-text-left content">
        {{JSON.stringify(schema, null, 4)}}
      </pre>
    </footer>

  </div>
</template>

<script>

import LabeledField from './labeled-field.vue'
import PropertyField from './property-field.vue'

export default {
  name: 'json-form',
  props: {
    'schema': {
      type: Object
    },
    'debug': {
      default: false
    }
  },
  data () {
    return {
    }
  },
  components: {
    LabeledField,
    PropertyField
  }
}
</script>

<style>
</style>
