import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


let store = new Vuex.Store({
    state: {
        count: 0,
        persons: [
            { id: 1, name: "Rudys Acosta", age: 25 },
            { id: 2 , name: "Jose Miguel", age: 17 },
            { id: 3, name: "Pancho Villa", age: 70 }
        ]
    },
    mutations: {
        increment(state) {
            state.count++;
        },
        decrement(state) {
            state.count--;
        },
        addPerson(state, person) {

            let p = {
                id: '_' + Math.random().toString(36).substr(2, 9),
                name: person.name,
                age: person.age
            };

            state.persons.push(p);
        } 
    },

    getters: {
       personsOfLegalAge: state => {
            return state.persons.filter(person => person.age >= 21);
       }
    }
})

export default store