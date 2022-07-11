import api from "../../api/api";


export default {
    state : {
        products : [],
        product : null,       
        pagination : {
            links : [],
            currentPage : null, 
            lastPage : null,  
        }
    },

    getters : {
       products : (state)  => {
            return state.products
       },
       product : (state) => {
            return state.product;
       },
       pagination : (state) => {
            return state.pagination
       }
    },

    mutations : {
        SET_PRODUCTS(state, data){
            state.products = data;
        },
        SET_PRODUCT(state, data){
            state.product = data;
        },       
        SET_PAGINATIONS(state, data){       
            state.pagination.links = data.links
            state.pagination.currentPage = data.current_page 
            state.pagination.lastPage = data.last_page
        }
    },
    
    actions : {
       async getProducts({ commit }, params ){         
            const  response  = await api.getProducts(params.collection,params.sort,params.link);         
            commit('SET_PRODUCTS', response.data.products.data);
            commit('SET_PAGINATIONS',response.data.products);
       },
       async getProduct({commit}, payload) {
            const response = await api.getProduct(payload);     
            commit('SET_PRODUCT', response.data.product);
       },
       async getFearureProducts({commit}, payload) {
            const  response  = await api.getFeaturePorducts(payload);         
            commit('SET_PRODUCTS', response.data);
       } ,
        async searchProducts({ commit }, body ){         
            const  response  = await api.productSearch(body);         
            commit('SET_PRODUCTS', response.data.products);          
        },     
    },
    
}