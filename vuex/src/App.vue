<template>
  <div id="app" class="container">
    <h1>Counter</h1>
    <counter />
    <p>El contador va en: {{ count }}</p> 

    <div>
      <h2> Lista total de personas </h2>
      {{ persons  }}

      <h2> Lista de personas mayores de 21</h2>
      {{ personsOfLegalAge }}
    </div>


    <add-person />


  </div>
</template>

<script>

import { mapGetters, mapState} from 'vuex'
import Counter from './components/Counter'
import AddPerson from './components/AddPerson'

export default {
  components: {
    Counter,
    'add-person': AddPerson
  },
  computed: {
    ...mapState(['persons', 'count']),
    ...mapGetters(['personsOfLegalAge'])
  },
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>