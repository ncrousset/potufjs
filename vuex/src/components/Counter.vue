<template>
  <div>
      <h2>{{ count }}</h2>
      <increment />      
      <decrement />
  </div>
</template>

<script>
    import { mapState } from 'vuex'
    import Increment from './Increment.vue';
    import Decrement from './Decrement.vue';
    
    export default {
        components: {
            Increment,
            Decrement
        },
        computed: {
            ...mapState(['count'])
        } 
    }
</script>
