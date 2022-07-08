
import api from "../../api/api";
export default {
    state : {
        isLoading : null,
      
    },
    getters : {
        isLoading : state => {           
            return state.isLoading 
        },    
    },
    mutations : {
        SET_STATE(state, data){                 
            state.isLoading = data; 
        }       
    },
    actions: {        
        isLoading({commit},boolean){
           commit('SET_STATE', boolean)
        },
        async sendMessage({commit}, body){
            await api.sendMessage(body);
        }
    },
}