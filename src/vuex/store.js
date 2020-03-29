import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        users: [],
    },
    mutations: {
        getUsers(state, payload) {
            state.users = [...state.users, ...payload];
        },
    },
});
