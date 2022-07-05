import api from '../../api/api'

export default {
    state : {
        shippingMethods : null,
        shippingMethod : null,
    },
    getters : {
        shippingMethods : state => {
            return state.shippingMethods;
        },
        shippingMethod : state => {
            return state.shippingMethod;
        }
    },
    mutations : {
        SET_SHIPPINGMETHODS(state,data){
            state.shippingMethods = data
        },
        SET_SHIPPINGMETHOD(state,data){
            state.shippingMethod = data
        }
    },
    actions : {
        async getShippingMethods({commit}) {
            const response = await api.getShippingMethods();
            commit('SET_SHIPPINGMETHODS', response.data);
        },
        async getShippingMethod({commit},id) {
            await api.getShippingMethod(id);
            commit('SET_SHIPPINGMETHOD', response.data);
        }
    }
}