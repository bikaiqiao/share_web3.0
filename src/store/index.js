import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userState: false,
        userName: "",
    },
    mutations: {
        login(state, userName) {
            state.userState = true;
            state.userName = userName;
        },
        logout(state) {
            state.userState = false;
            state.userName = "";
        }
    },
    actions: {},
    modules: {}
})