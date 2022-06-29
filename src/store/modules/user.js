
import api from "../../api/api";

export default { 

    state : {

    },

    getters : {
        user : state => { return state.user },        
    }, 

    actions : {
        async user( {commit }) {
           const response = await api.user();
           commit('SET_USER',response.data)                         
        },
        async updateUser({commit}, params){
             await api.userUpdate(params);
            
        }
    },

    mutations : {
        SET_USER(state, data) { 
          state.user = data;
        }
    }

};