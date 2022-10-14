import { createStore } from 'vuex'

const state =  {
    user : null,
   
}

export default createStore ({
    state,
    getters : {
        user : (state) => {
            return state.user
        },
        authenticated : () => {
            if( localStorage.getItem('access_token') )  return true
            return false   
        }
    },
    actions : {
        user(context, authenticated){
            context.commit('user', user);
        }
    },
    mutations : {
        user(state, user) {
           state.user = user;
        }
    },
});

