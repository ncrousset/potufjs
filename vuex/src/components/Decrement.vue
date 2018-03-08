<template>
  <button @click="decrement" class="btn btn-danger">Reducir</button>
</template>
<script>

import { mapMutations } from 'vuex'

export default {
    methods: {
        ...mapMutations(['decrement']),
    }
}
</script>