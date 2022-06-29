import api from "../../api/api";

export default {
    state : {
        collection : [],
    },

    getters : {
        collection : state => { return state.collection }
    },

    actions : {
        async collection( {commit} ){
            const response = await api.getCollections();         
            commit('SET_COLLECTION', response.data);
        }
    },

    mutations : {
        SET_COLLECTION(state, data){
            state.collection = data;
        }
    }
}