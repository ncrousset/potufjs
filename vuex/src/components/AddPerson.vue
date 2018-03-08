<template>
  <div class="row">
      <form action="" class="form-inline">
      <div class=" form-group mx-sm-3 mb-2">
        <input type="text" v-model="person.name" class="form-control" id="name" placeholder="Name ">
    </div>
    <div class=" form-group mx-sm-3 mb-2">
        <input type="number" v-model="person.age" class="form-control" id="age" placeholder="Age ">
    </div>
    <button class="btn btn-primary mb-2" @click.prevent="addPerson">Add Person</button>
    </form>
  </div>
</template>
<script>

import store from '../store';

export default {

    data() {
        return {
            person: {
                name: '',
                age: ''
            }
        }
    },
        
    methods: {

        validation() {
            return (this.person.name.length > 0 && this.person.age > 0) ? true : false;
        },

        addPerson() {

            if(!this.validation()) {
                console.log('Error validate');
                return false;
            }

            store.commit('addPerson', this.person);

        }
    }

}
</script>
