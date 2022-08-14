<script>
    import ProductDescription from '../components/ProductDescription.vue'
    import ProductReview from '../components/ProductReview.vue'
    import FeatureProduct from '../components/FeatureProduct.vue';
    import Variant from '../components/Variant.vue'
    import Button from '../components/forms/Button.vue';
    import currency from '../libraries/currency';
    import ProductImageSplide from '../components/ProductImageSplide.vue'

    export default{   
    data() {
        return { 
            isLoading : false,
            isBtnLoading : false,
            qty : 1,      
            is_review_selected: false,    
            activeTabClass: "bg-[#f5f5f5]",        
        };
    },
    methods : {
        async getProduct(){
            this.isLoading = true;
            try{
                await this.$store.dispatch('getProduct',this.$route.params.item) 
            }finally{
                this.isLoading = false;
            }
        },
        format(number){
          return currency.format(number);  
        },
        tabEvent(state) {
            this.is_review_selected = state;
        },
        increment(){         
            this.$store.dispatch('increment', this.qty++);              
        },
        decrement(){
            if(this.qty > 0) this.qty--;            
            this.$store.dispatch('decrement',this.qty);               
        },
        setAttribute(event) {          

            const attribute = { 
                id : parseInt(event.currentTarget.getAttribute('id')),
                name : event.currentTarget.getAttribute('name'),
                value : event.currentTarget.value,
            }         
         
            let exist = false;

            for (let i = 0; i < this.attribute.length; i++) {
                if(this.attribute[i].id === attribute.id) {                                    
                    this.attribute[i].value = attribute.value; 
                    exist = true;                       
                }
            }

            if (exist) return;

            this.attribute.push(attribute) 
                     
        },
        async addToCart(){                  
            this.isBtnLoading = true;     
            try {
                const body = {  qty : this.qty,  attributes : this.attribute,  id : this.product.id }
                await this.axios.post('/set-cart-cookie');  
                await this.axios.post('/cart/add', body);
                this.$store.dispatch('cart'); 
                this.$store.dispatch('cartModalOpen', true);                    
          
            } catch (error) {
                console.log(error);
            }finally{
                   this.isBtnLoading = false;
            }             
            
        }
    },
    created () {  
       this.getProduct(); 
    },  
    computed : {
        product(){      
            return  this.$store.getters.product;
        },
        photos(){
            let array = [ { id: 0, path : this.product.imagePath}];
            this.product.photos.forEach(photo => {
                array.push({id : photo.id, path : photo.path});
            })          
            return array;
        },
        variants(){
            let array = [];
            this.product.attributes.forEach(attribute => {
                 array.push({id : attribute.attribute_id, name : attribute.attributes.name, items : [] });                   
            }); 
            array.forEach(attribute => {      
                this.product.variants.forEach(variant => {  
                    if (attribute.id == variant.attribute_id) {
                        attribute.items.push(variant.name)  
                    }           
                })           
            })  
            return array;        
        },
        attribute(){
            let array = [];
            if(this.variants.length != 0){
                this.variants.forEach(item => {
                    array.push({id : item.id, name : item.name, value : item.items.length == 0 ? null : item.items[0] });
                })
            }
            return array;
        }
    },
    watch :{
        $route(to, from){
            if(to.name == this.$route.name){               
               this.getProduct(); 
            }
        }
    },
    components: { ProductDescription, ProductReview, FeatureProduct, Variant, Button, ProductImageSplide },
}
</script>
<template>  
    <div class="container-min-height">
        <loading v-model:active="isLoading"                
                 :is-full-page="true"/>

      
        <div class="container md:m-auto" v-if="!isLoading">
            <div class="w-full  p-4 mt-4 md:mt-16 md:p-0">
            <div class="flex flex-col md:flex-row">
                <div class="w-full md:w-3/5">
                <div class="block">
                        <div class="w-full flex">
                            <!-- <ul class="flex flex-col gap-4">
                                <li v-for="photo in product.photos" class="w-20">
                                    <img :src="baseApi+photo.path" class="w-full h-full aspect-square"  alt="">
                                </li >                                                
                            </ul> -->
                            <!-- <figure class="ml-8 mb-4">
                                <img :src="baseApi+product.imagePath" class="w-full md:w-100 "  alt="">
                            </figure>   -->
                             <ProductImageSplide :photos="photos"></ProductImageSplide>                          
                        </div>  

                </div>
                </div>
                <div class="w-full md:w-2/5 md:ml-8">
                    <div class="block">
                        <h1 class="block text-theme font-semibold text-lg tracking-widest uppercase mt-4 md:mt-0 mb-2">{{ product.name }}</h1>                       
                        <span class="block mb-2 text-theme ">{{ format(product.regular_price) }}</span>
                        <p class="block mb-2">{{ product.short_description }}</p>
                        <ul class="mt-4">
                            <li v-for="item in variants" class="mb-4">
                                <span class="relative block capitalize mb-2">{{ item.name}}:</span>
                                <select @change="setAttribute($event)" :name="item.name" :id="item.id"   class="capitalize w-full text-dark  bg-transparent border border-dark md:w-1/2 p-2">                         
                                    <option v-for="variant in item.items">{{variant}}</option>
                                </select>                              
                            </li>                        
                        </ul>
                        <div class="w-[140px] h-[45px] flex flex-row border border-dark mt-8">
                            <span  @click="decrement" class="w-[45px] text-dark  flex justify-center items-center p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                                </svg>
                            </span>
                            <input type="text" class="!w-[calc(100%_-_90px)]  text-center px-2   !border-0 " v-model="qty"  alt="">
                            <span @click="increment" class="w-[45px] text-dark  flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4"  fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            </span>
                        </div>
                        <br>
                        <!-- <button @click.prevent="addToCart" class="btn sm:!w-full md:!w-full uppercase">Add to Cart</button> -->
                        <Button @click="addToCart" :isLoading="isBtnLoading" :btntext="'Add to cart'" ></Button>
                        </div>
                         <ProductDescription :description="product.long_description"></ProductDescription>
                </div>
            </div>            
        </div>
        <FeatureProduct></FeatureProduct>
        </div>     
    </div>
 
</template>