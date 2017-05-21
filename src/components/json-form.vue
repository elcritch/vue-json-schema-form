<template>
  <div >
    <h2>Form Example</h2>
    <pre >
      {{JSON.stringify(schema, null, 4)}}
    </pre>
  </div>
</template>

<script>
export default {
  name: 'json-form',
  props: {
    'schema': {
      type: Object
    }
  },
  data () {
    return {
    }
  }
}
</script>
