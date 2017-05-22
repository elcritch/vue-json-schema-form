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
              :options="{prettyField: true, descriptionTooltips: opts.descriptionTooltips}"
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

import Ajv from 'ajv';

var ajv = new Ajv({allErrors: true, }); // options can be passed, e.g. {allErrors: true}


export default {
  name: 'json-form',
  props: {
    'schema': {
      type: Object
    },
    'options': {
      type: Object,
    },
    'value': {
      type: Object
    }
  },
  computed: {
    schemaValidator: function () {
      // console.log("schema changed: ", this.schemaValidator)
      return ajv.compile(this.schema);
    },
    opts: function () {
      return Object.assign({}, this.$data.defaultOptions, this.options)
    }
  },
  data() {
    return {
      dataModel: this.createDefaultModel(),
      defaultOptions: {
        debug: false,
        includeNulls: false,
        onlyEmitValid: false,
        descriptionTooltips: true,
      }
    }
  },
  methods: {
    handleUpdate(key, val) {
      // console.log("json-form:handleUpdate::", JSON.stringify(val))
      this.$set(this.dataModel, key, val)
      // console.log("datamodel update", val)

      var updateModel = Object.assign({}, this.dataModel)
      if (!this.opts.includeNulls) {
        for (var key in updateModel) {
          if (updateModel[key] === null)
            delete updateModel[key]
        }
      }

      let isJsonValid = this.validate(updateModel)

      if (isJsonValid || !this.opts.onlyEmitValid) {
        this.$emit('input', updateModel)
      }
    },
    validate(data) {
      // console.log("validate:: ", this.schemaValidator)

      var valid = this.schemaValidator(data);

      if (!valid)
        console.log("json-form:errors:: ", this.schemaValidator.errors);

      return valid
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
