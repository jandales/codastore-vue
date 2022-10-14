import api from '../../api/api'

export default {
    state : {
        cart: null, 
        count : 0,   
        isOpen : 0,
    },
    getters : {
        cart : state => { return state.cart},       
        cartIsOpen : state => { return state.isOpen },

        cartItems : state => {
            if(state.cart != null) return state.cart.items
        },
        subtotal : state => {
            if(state.cart == null) return 0;

            if(state.cart.items == null) return 0

            let total = 0;        

            state.cart.items.forEach(item => {
                total += item.qty * item.product.regular_price;
            });     

            return total;
        },
        cartCount : state => {
           
            if(state.cart == null) return 0;

            if(state.cart.items == null) return 0

            let itemCount = 0;

            state.cart.items.forEach(item => {
                itemCount += item.qty;
            });     

            return itemCount;
        }
    },
    mutations : {
        SET_ITEMS(state, data){
            state.cart = data;
        },
        SET_COUNT(state, count){
            state.count = count;
        },
        SET_OPEN(state, data){
            state.isOpen = data;
        },     
    },
    actions : {
        async cart({commit}){
            const response = await api.getCart();
            commit('SET_ITEMS', response.data);
            return response.data;
        },
        async updateCartQty({commit}, params){
            await api.updateCartQty(params.id, params.quantity);
        },
        async cartItemDelete({commit}, id){
            await api.deleteCartItem(id);
        },
        cartModalOpen({commit}, data){
            commit('SET_OPEN', data);
        }
        
    }
}