import api from '../../api/api'

export default {
    state : {
        cart: null,    
    },
    getters : {
        cart : state => { return state.cart}
    },
    mutations : {
        SET_ITEMS(state, data){
            state.cart = data;
        },    
    },
    actions : {
        async cart({commit}){
            const response = await api.getCart();
            commit('SET_ITEMS', response.data);
        },
        async updateCartQty({commit}, params){
            await api.updateCartQty(params.id, params.quantity);
        },
        async cartItemDelete({commit}, id){
            await api.deleteCartItem(id);
        }
        
    }
}