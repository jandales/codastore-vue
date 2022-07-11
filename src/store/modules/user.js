
import api from "../../api/api";

export default { 

    state : {
        user : null,
        
    },

    getters : {
        user : state => { return state.user },        
        authenticated : () => {
            if( localStorage.getItem('access_token') )  return true
            return false   
        }
    }, 

    actions : {
        async user( {commit }) {
           const response = await api.user();
           commit('SET_USER',response.data)                         
        },
        async updateUser({commit}, params){
             await api.userUpdate(params);
            
        },
        async uploadImage({commit}, payload){        
            const response = await api.uploadImage(payload)
            commit('SET_USER',response.data)  
        },
        async removeImage({commit}){        
            const response = await api.removeImage()
            commit('SET_USER',response.data)  
        }
    },

    mutations : {
        SET_USER(state, data) { 
          state.user = data;
        }
    }

};