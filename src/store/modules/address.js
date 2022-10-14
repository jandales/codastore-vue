import api from '../../api/api'

export default {
    state : {
        addresses : [],
        address  : null
    },
    getters : {
        addresses : state => { return state.addresses },
        addresses_count : state => { return state.addresses.length} ,   
        address :  state => { return state.address }
    },
    mutations :{
        SET_ADDRESSES(state, data){
            state.addresses = data;
        },
        SET_ADDRESS(state, data){
            state.address = data;
        }
    },
    actions : {
        async getAddresses({commit}){
            const repsonse = await api.getAddresses();
            commit('SET_ADDRESSES', repsonse.data);  
        },

        async getAddress({commit}, payload){
            const repsonse = await api.getAddress(payload);
            commit('SET_ADDRESS', repsonse.data);  
        },

        async deleteAddeess({ commit },payload){
             await api.deleteAddress(payload);                       
        },

        async setDefaulAddress({commit}, payload){
             const response = await api.setDefaultAddress(payload);  
             commit('SET_ADDRESS', response.data);   
             return response;                
        },

        async getDefaultAddress({commit}){
            const repsonse = await api.getDefaultAddress();
            commit('SET_ADDRESS', repsonse.data);  
        },

        async updateAddress({commit}, params){   
            const response = await api.updateAddress(params.id, params.address)
            commit('SET_ADDRESS', response.data); 
            return response;
        },

        async addAddress({commit}, params){         
            await api.storeAddress(params);          
        }
    }
}