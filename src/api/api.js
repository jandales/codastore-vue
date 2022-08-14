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
    productSearch(payload){
        return axios.post('/products/search', payload);
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
    cancelOrder(id){
        return axios.patch(`/user/orders/cancel/${id}`)
    },
    getOrderByNumber(number) {
        return axios.get(`/user/orders/order-number/${number}`)        
    },
    getCart(){
        return axios.get('/cart');
    },
    getCartCount(){
        return axios.get('/cart/count');
    },
    updateCartQty(id, quantity){
        return axios.patch(`/cart/${id}`, { quantity : quantity });
    },
    deleteCartItem(id){
        return axios.delete(`/cart/item/${id}`);
    },
    getShippingMethods(){
        return axios.get('/shipping-methods')
    },
    getShippingMethod(id){
        return axios.get(`/shipping-methods/${id}`)
    },
    checkout(){
        return axios.get('/checkout');
    },
    checkoutInfomationStore(params){
        return axios.post('/checkout',params);
    },
    checkoutShipping(){
        return axios.get('/checkout/shipping');
    },
    checkoutUpdateShippingMethod(body){
        return axios.put('/checkout/shipping/update', body);
    },

    placeOrder(body){
        return axios.post('/checkout/placeorder',body)
    },
    applyCoupon(body){ 
        return axios.post('/cart/apply-coupon', body);
    },
    getCoupon(){ 
        return axios.get('/cart/coupon');
    },
    removeCoupon(){ 
        return axios.delete(`/cart/remove-coupon`);
    },
    sendMessage(body){
        return axios.post('/contact/send-message', body);
    },
    uploadImage(body){      
        return axios.post('/user/upload', body,{
            headers : { 'Content-Type': 'multipart/form-data' }
        });
    },
    removeImage(){      
        return axios.delete('/user/remove-image');        
    },






    



    
}
