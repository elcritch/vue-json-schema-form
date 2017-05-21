<template>
  <div class="">
    <label class="label">{{title}}</label>
    <p class="control has-icon has-icon-right">
      <input
          class="input is-success"
          type="text"
          :placeholder="jsonProperty.description"
          :value="value"
          @input="handleUpdate"
      >
      <!-- <i class="fa fa-check"></i> -->
      <span class="help is-success">{{onSuccess}}</span>
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
    }
  },
  methods: {
    handleUpdate(evt) {
      // console.log("handleUpdate:: ", evt)
      this.$emit('input', evt.target.value)
    }
  },
  computed: {
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
