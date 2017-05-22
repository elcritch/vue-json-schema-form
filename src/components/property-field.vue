<template>
  <div class="">
    <label class="label">{{title}}</label>


    <p class="control has-icon has-icon-right ">
      <tooltip :content="jsonProperty.description" :disabled="!displayTooltip">

      <input
          v-if="jsonProperty.type == 'string'"
          class="input"
          type="text"
          :placeholder="jsonProperty.description"
          :value="value"
          @input="handleUpdate($event.target.value)"
      >

      <input-number
          class=""
          v-if="jsonProperty.type == 'integer'"
          :min="jsonProperty.minimum || Number.MIN_SAFE_INTEGER"
          :max="jsonProperty.maximum || Number.MAX_SAFE_INTEGER"
          :placeholder="jsonProperty.description"
          :val="intValue"
          @input="handleUpdate"
      ></input-number>

      <!-- <i class="fa fa-check"></i> -->
      <span class="help is-success">{{onSuccess}}</span>
      <span class="help is-success">{{onSuccess}}</span>

    </tooltip>
    </p>
  </div>
</template>

<script>

/** Splits a camel-case or Pascal-case variable name into individual words.
 * @param {string} s
 * @returns {string[]}
 */
function splitWords(s) {
var re, match, output = [];
	re = /([A-Za-z]?)([a-z]+)/g;

	match = re.exec(s);
  while (match) {
    output.push([match[1].toUpperCase(), match[2]].join(""));
		match = re.exec(s);
	}
  return output;
}

export default {
  name: 'property-field',
  props: {
    'name': {
      type: String
    },
    'value': {
    },
    'json-property': {
      type: Object,
      default: {}
    },
    'options': {
      type: Object,
      default: {}
    },
    'on-success': {
      type: Function
    }
  },
  data () {
    return {
      defaultOptions: {
        descriptionTooltips: true,
      }
    }
  },
  methods: {
    handleUpdate(val) {
      // console.log("handleUpdate:: ", evt)
      this.$emit('input', val)
    }
  },
  computed: {
    opts: function () {
      return Object.assign({}, this.$data.defaultOptions, this.options)
    },
    displayTooltip() {
      if (typeof this.jsonProperty.description == 'string' && this.opts.descriptionTooltips)
        return true
    },
    intValue() {
      if (this.value === null)
        return null
      return parseInt(this.value)
    },
    placeholder() {
      return ""
    },
    title() {
      if (this.jsonProperty.title) {
        return this.jsonProperty.title
      }

      if (this.options.prettyField && (typeof this.name === "string")) {
        return splitWords(this.name).join(" ")
      }

      return this.name
    }
  }
}
</script>

<style>
</style>
