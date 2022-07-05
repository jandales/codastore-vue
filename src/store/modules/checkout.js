import api from '../../api/api';

export default {
    state : {
        shipping : null,
        email : null,
        activeShippingMethod : 0,
        card : {}
    },
    getters : {
        shipping : state => {           
            return state.shipping 
        },
        email : state => {
            return state.email;
        },
        activeShippingMethod: state => {
            return state.activeShippingMethod;
        }
    },
    mutations : {
        SET_SHIPPING(state, data){                 
            state.shipping = data;  
        },
        SET_EMAIL(state, data){
            state.email = data;
        },
        SET_METHOD(state, data) {           
            state.activeShippingMethod = data;
        }
    },
    actions: {
        async checkoutInformation({commit}){
            const response = await api.checkout();  
            commit('SET_EMAIL', response.data.email);
            commit('SET_SHIPPING', response.data.address);
        },
        async storeCheckoutInformation({commit}, body){
            const response = await api.checkoutInfomationStore(body);
        },
        async checkoutShipping({commit}){
            const response = await api.checkoutShipping();
            commit('SET_EMAIL', response.data.email);
            commit('SET_SHIPPING', response.data.address);
            commit('SET_METHOD', response.data.method);
        },
        async checkoutUpdateShippingMethod({commit, state}){
            const response = await api.checkoutUpdateShippingMethod({shipping_method : state.activeShippingMethod.id});           
        },
        async placeOrder({commit}, body){
            return await api.placeOrder(body);
        },
        updateShippingMethod({commit},data){
           commit('SET_METHOD', data)
        }

    },
}