import api from '../../api/api'

export default {
    state : {
        isSuccess : false,
        errors : []
    },
    getters :  {
        success : state => { return state.isSuccess },
        errors : state => { return state.errors }
    },
    mutations : {
        SET_SUCCESS(state, data){
            state.isSuccess = data;
        },
        SET_ERRORS(state, data){
            state.errors = data;
        }
    },
    actions : {
        async register({commit}, params){
           await api.register(params)
                    .then(response => {
                        if(response.status === 200) commit('SET_SUCCESS', true)                
                    })
                    .catch(errors => {
                        commit('SET_ERRORS', errors.response.data.errors);
                    })      
        }
    }
}