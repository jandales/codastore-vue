import api from '../../api/api'

export default {
    state : {
        orders : [],
        order  : null
    },
    getters : {
        orders : state => { return state.orders },
        order  :  state => { return state.order }
    },
    mutations :{
        SET_ORDERS(state, data){
            state.orders = data;
        },
        SET_ORDER(state, data){
            state.order = data;
        }
    },
    actions : {
        async getOrders({commit}){
            const repsonse = await api.getOrders();
            commit('SET_ORDERS', repsonse.data);  
        },
        async getOrder({commit}, payload){
            const repsonse = await api.getOrder(payload);
            commit('SET_ORDER', repsonse.data);  
        },
    }
}