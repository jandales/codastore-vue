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
        }
    }
}