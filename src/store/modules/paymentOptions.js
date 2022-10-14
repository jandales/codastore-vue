import api from '../../api/api'

export default {
    state : {
        paymentCards : [],
        card  : null
    },
    getters : {
        paymentCards : state => { return state.paymentCards },
        paymentOptions_count : state => { return state.paymentCards.length} ,  
        card  :  state => { return state.card }
    },
    mutations :{
        SET_PAYMENTCARDS(state, data){
            state.paymentCards = data;
        },
        SET_CARD(state, data){
            state.card = data;
        }
    },
    actions : {
        async getPaymentCards({commit}){
            const repsonse = await api.getPaymentOptions();
            commit('SET_PAYMENTCARDS', repsonse.data);  
        },

        async getPaymentCard({commit}, payload){
            const repsonse = await api.getPaymentOption(payload);
            commit('SET_CARD', repsonse.data);  
        },

        async getDefaultPaymentCard({commit}){
            const repsonse = await api.getDefaultPaymentOption();
            commit('SET_CARD', repsonse.data);  
        },


        async deleteCard({ commit },payload){
             await api.deletePaymentCard(payload);                       
        },

        async setDefaulCard({commit}, payload){
             const response = await api.setDefaultPaymentCard(payload); 
             return  response;          
        },

        async updateCard({commit}, params){         
            const response = await api.updatePaymentOptions(params.id, params.card)
            commit('SET_CARD', response.data); 
            return response;
        },  

        async addCard({commit}, params){         
            await api.storePaymentCard(params);          
        }

    



    }
}