<template>
  <div id="app" class="container">
    <h1>Counter</h1>
    <counter></counter>
  </div>
</template>

<script>

import Counter from './components/Counter';

export default {
  components: {
    Counter
  },
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>