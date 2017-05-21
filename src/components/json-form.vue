<template>
  <div class="card is-fullwidth ">
    <div class="card-content ">
      <div class="media">
        <div class="media-content">
          <label class="title" v-if="schema.title"> {{schema.title}} </label>
          <property-field v-for="(item, name) in schema.properties"
              :key="name"
              :name="name"
              :json-property="item"
              :options="{prettyField: true}"
              v-bind:value="dataModel[name]"
              @input="handleUpdate(name, $event)"
          >
          </property-field>
        </div>
      </div>
    </div>

    <footer class="card-footer">

      <!-- <div class="">
        <label class="is-pulled-left">Info:</label>
        <br />
        <labeled-field name="Type:" :value="schema.type" v-if="debug">
        </labeled-field>
        <labeled-field name="Required:" :value="schema.required " v-if="debug">
        </labeled-field>
      </div> -->

    </footer>

    <label>JSON Form Model:</label>
    <pre class="has-text-left ">{{JSON.stringify(dataModel, null, 4)}}</pre>

    <br />

    <label>Schema:</label>
    <pre class="has-text-left content">{{JSON.stringify(schema, null, 4)}}</pre>

  </div>
</template>

<script>
import clone from 'clone';

import LabeledField from './labeled-field.vue'
import PropertyField from './property-field.vue'

export default {
  name: 'json-form',
  props: {
    'schema': {
      type: Object
    },
    'options': {
      type: Object,
      default() {
        return {
          debug: false,
          includeNulls: false,
          emitInvalidJson: false,
        }
      }
    },
    'value': {
      type: Object
    }
  },
  created() {
  },
  data() {
    return {
      dataModel: this.createDefaultModel(),
    }
  },
  methods: {
    handleUpdate(key, val) {
      // console.log("json-form:handleUpdate::", JSON.stringify(val))
      this.$set(this.dataModel, key, val)
      // console.log("datamodel update", val)

      var updateModel = Object.assign({}, this.dataModel)
      if (!this.options.includeNulls) {
        for (var key in updateModel) {
          if (updateModel[key] === null)
            delete updateModel[key]
        }
      }

      let isJsonValid = this.validate()

      if (isJsonValid == true || this.options.emitInvalidJson == true) {
        this.$emit('input', updateModel)
      }
    },
    validate() {
      return true
    },
    createDefaultModel() {
      var model = {}
      for (var key in this.schema.properties) {
        let value = this.schema.properties[key]

        if (value.default) {
          model[key] = clone(value.default)
        }
        else {
          model[key] = null
        }
      }

      return model
    },
  },
  components: {
    LabeledField,
    PropertyField
  }
}
</script>

<style>
</style>
