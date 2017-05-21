<template>
  <div>

  </div>
</template>

<script>

export default {
  name: 'JsonForm',
  props: ['schema'],
  data() {
    return {};
  },
  methods: {
    handleClear() {
      this.clearCompleted();
    }
  }
};
</script>
