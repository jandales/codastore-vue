

export default {
    state : {
        count : 1,
        attribute : null       
    },
    getters : {
        count : state => { return state.count }
    },
    mutations : {
        SET_COUNT(state, count){
            state.count = count;
        },
        SET_ATTRIBUTE(state, data){
            state.attribute = data;
        }
    },
    actions : {
        increment({commit} , count){
            commit('SET_COUNT',count);
        },
        decrement({commit} , count){
            commit('SET_COUNT',count);
        },
        setAttribute({commit}, data){
            commit('SET_ATTRIBUTE',data);
        }
    }
}