import Vue from 'vue';

// import 'todomvc-app-css/index.css';
import VueBlu from 'vue-blu'
import 'vue-blu/dist/css/vue-blu.min.css'

Vue.use(VueBlu)

import JsonForm from './json-form/json-form.vue'

export default new Vue({
  components: {
    'json-form': JsonForm,
  },
  el: '#root'
});
