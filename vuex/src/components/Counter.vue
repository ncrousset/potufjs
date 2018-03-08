<template>
  <div>
      <h2>{{ count }}</h2>
      <increment />      
      <decrement />
  </div>
</template>

<script>
    import store from '../store';
    import Increment from './Increment.vue';
    import Decrement from './Decrement.vue';
    
    export default {
        components: {
            Increment,
            Decrement
        },
        computed: {
            count() {
                return store.state.count;
            }
        },
        methods: {
        
        }
    }
</script>
