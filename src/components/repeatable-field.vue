<template>
  <div class="control has-addons">
    <span class="input tag is-medium is-unselectable" style="width: 5em">{{name}}</span>
    <span class="input ">{{value}}</span>
  </div>
</template>

<script>
export default {
  name: 'repeatable-field',
  props: {
    'name': {
      type: String
    },
    'value': {
      type: String
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
