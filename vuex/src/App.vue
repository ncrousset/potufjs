<template>
  <div id="app" class="container">
    <h1>Counter</h1>
    <counter />
    <p>El contador va en: {{ count }}</p>
  </div>
</template>

<script>

import store from './store';
import Counter from './components/Counter';

export default {
  components: {
    Counter
  },
  computed: {
    count() {
      return store.state.count;
    }
  },
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>