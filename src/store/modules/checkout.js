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
        },
        paymentCard : state => {
            return state.card;
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
        },
        SET_PAYMENTCARD(state, data){
            state.card = data;
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
        async getCheckoutPaymentCard({commit}){
            const repsonse = await api.getDefaultPaymentOption();
            commit('SET_PAYMENTCARD', repsonse.data);  
        },

        updateShippingMethod({commit},data){
           commit('SET_METHOD', data)
        },
        updateShippingAddress({commit}, data){
            commit('SET_SHIPPING', data);
        },
        changePaymentCard({commit}, data){
            commit('SET_PAYMENTCARD', data)
        }
        

    },
}