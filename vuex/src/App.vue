<template>
  <div id="app" class="container">
    <!-- <h1>Counter</h1>
    <counter />
    <p>El contador va en: {{ count }}</p> -->

    <div>
      <h2> Lista total de personas </h2>
      {{ persons | json }}

      <h2> Lista de personas mayores de 21</h2>
      {{ personsOfLegalAge | json }}
    </div>


    <add-person />


  </div>
</template>

<script>

import store from './store';
import Counter from './components/Counter';
import AddPerson from './components/AddPerson';

export default {
  components: {
    Counter,
    'add-person': AddPerson
  },
  computed: {
    count() {
      return store.state.count;
    },
    persons() {
      return store.state.persons;
    },
    personsOfLegalAge() {
      return store.getters.personsOfLegalAge;
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