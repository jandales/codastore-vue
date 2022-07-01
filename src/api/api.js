import axios from './axios.js'


export default {

    login(params){
        return axios.post('/login',params);
    },

    register(params){
        return axios.post('/register',params);
    }, 
    user(){
        return axios.get('/user');
    },
    userUpdate(params){
        return axios.put('/user', params);
    },
    getProducts(collection, sort, link) {   
        let api = `/products/collection/${collection}`;

        if(sort != null) api = `/products/collection/${collection}/sort-by=${sort}`       

        if(link != null)   api = link;          
        
        return axios.get(api);
    },
    getProduct(slug){
     
        return axios.get(`/products/${slug}`);
    },

    getFeaturePorducts(limit) {
        return axios.get(`/products/featured/limit=${limit}`);
    },

    getCollections() {
        return axios.get('/collection');
    },

    // address api
    getAddresses(){
        return axios.get('/user/address');
    },

    getAddress(id){
        return axios.get(`/user/address/${id}`)
    },

    getDefaultAddress(){
        return axios.get(`/user/address/default/1`)
    },
    
    setDefaultAddress(id) {
        return axios.patch(`/user/address/${id}`);
    },

    deleteAddress(id){
        return axios.delete(`/user/address/${id}`)
    },

    storeAddress(params) {
        return axios.post('/user/address', params);
    },

    updateAddress(id,params) {     
        return axios.put(`/user/address/${id}`, params);
    },

    // Payment Option Api
    getPaymentOptions(){
        return axios.get('/user/paymentOption');
    },

    getPaymentOption(id){
        return axios.get(`/user/paymentOption/${id}`);
    },

    getDefaultPaymentOption(){
        return axios.get(`/user/paymentOption/default/1`);
    },
    
    setDefaultPaymentCard(id) {
        return axios.patch(`/user/paymentOption/${id}`);
    },

    deletePaymentCard(id){
        return axios.delete(`/user/paymentOption/${id}`)
    },

    storePaymentCard(params) {
        return axios.post('/user/paymentOption', params);
    },

    updatePaymentOptions(id, params) {
        return axios.put(`/user/paymentOption/${id}`, params);
    },

    // Orders

    getOrders() {
        return axios.get('/user/orders')        
    },

    getOrder(id) {
        return axios.get(`/user/orders/${id}`)        
    },
    getCart(){
        return axios.get('/cart');
    },
    updateCartQty(id, quantity){
        return axios.patch(`/cart/${id}`, { quantity : quantity });
    },
    deleteCartItem(id){
        return axios.delete(`/cart/item/${id}`);
    }
    



    
}
