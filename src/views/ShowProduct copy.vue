<script>
    import ProductDescription from '../components/ProductDescription.vue'
    import ProductReview from '../components/ProductReview.vue'
    import FeatureProduct from '../components/FeatureProduct.vue';
    import Variant from '../components/Variant.vue'
import Variant1 from '../components/Variant.vue';


    export default{
    data() {
        return { 
            qty : 1,
            attribute : [],
            is_review_selected: false,    
            activeTabClass: "bg-[#f5f5f5]",
        };
    },
    methods : {
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
        setAttribute(id, attribute, variant, elem){ 
           let exist = false;
           for(let i = 0; i < this.attribute.length; i++){
                   if(this.attribute[i].id === id) {
                       exist = true;
                       this.attribute[i].variant = variant;                      
                   }
            }
            if(exist == false){
                this.attribute.push({id : id, attribute : attribute, variant  : variant})    
            }             
            // this.$store.dispatch('decrement',this.qty);               
        },
            // filter children and find buttons ( by component-type property )
        // and inactive all .
        inactiveAllButtons(){
            var buttons = this.$children.filter(function(child) {
                return child.$attrs['variant-name'] === 'variants';
            });
            for(var i = 0 ; i < buttons.length ; i++ ){
            buttons[i].isActive = false;
        }
      }


    },
    created () {  
        this.$store.dispatch('getProduct',this.$route.params.item)        
       
    },  
    computed : {
        product(){      
            return  this.$store.getters.product;
        },
        variants() {

            let newArray = [];
            this.product.attributes.forEach(attribute => {
                 newArray.push({id : attribute.attribute_id, attributeName : attribute.attributes.name, items : [] });                   
            }); 

            newArray.forEach(attribute => {      
                this.product.variants.forEach(variant => {  
                    if (attribute.id == variant.attribute_id) {
                        attribute.items.push(variant.name)  
                    }           
                })           
            })  

            return newArray;        
        },
        count(){
            return this.$store.getters.count;
        }      
    },
    components: { ProductDescription, ProductReview, FeatureProduct, Variant, Variant1 },
}
</script>
<template>

    <div class="container md:m-auto" v-if="product">
         <div class="w-full  p-4 mt-4 md:mt-16 md:p-0">
         <div class="flex flex-col md:flex-row">
            <div class="w-full md:w-3/5">
               <div class="block">
                     <div class="w-full flex">
                        <ul class="flex flex-col gap-4">
                            <li v-for="photo in product.photos" class="w-20">
                                <img :src="baseApi+photo.path" class="w-full h-full aspect-square"  alt="">
                            </li >
                                              
                         </ul>
                        <figure class="ml-8 mb-4">
                            <img :src="baseApi+product.imagePath" class="w-full md:w-100 "  alt="">
                        </figure>
                        
                     </div>
                    
               </div>
            </div>
            <div class="w-2/5 ml-8">
                <div class="block">
                    <h1 class="block text-theme font-semibold text-lg tracking-widest uppercase mt-4 md:mt-0 mb-2">{{ product.name }}</h1>
                    <ul class="flex gap-2 mb-2">
                        <li><font-awesome-icon icon="fa-solid fa-star" color="#ff523b" /></li>
                        <li><font-awesome-icon icon="fa-regular fa-star"  color="#ff523b" /></li>
                        <li><font-awesome-icon icon="fa-regular fa-star"  color="#ff523b" /></li>
                        <li><font-awesome-icon icon="fa-regular fa-star"  color="#ff523b" /></li>
                        <li><font-awesome-icon icon="fa-regular fa-star"  color="#ff523b" /></li>
                    </ul>
                    <span class="block mb-2 text-theme ">{{ product.regular_price }}</span>
                    <p class="block mb-2">{{ product.short_description }}</p>
                    <ul class="mt-4">
                        <li v-for="item in variants" class="mb-4">
                            <span class="relative block capitalize mb-2">{{ item.attributeName}}:</span>
                            <ul class="flex gap-4">
                                <!-- <Variant  v-for="(variant,index) in item.items" :key="index" variant-name="variants" :name="variant"></Variant> -->
                                <li v-for="(variant,index) in item.items" :key="index"  @click="setAttribute(item.id,item.attributeName,variant, $event)">                              
                                    <span class="flex items-center justify-center border border-gray-300  text-xs capitalize p-5 w-8 h-8"><label for="">{{variant}}</label></span>
                                </li>                               
                            </ul>
                        </li>                        
                    </ul>
                    <div class="w-[140px] h-[45px] flex flex-row border border-gray-200 mt-8">
                        <span  @click="decrement" class="w-[45px]  flex justify-center items-center p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                            </svg>
                        </span>
                        <input type="text" class="!w-[calc(100%_-_90px)]  text-center px-2   !border-0 " v-model="qty"  alt="">
                        <span @click="increment" class="w-[45px] flex justify-center items-center">
                             <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4"  fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                        </span>
                    </div>
                    <br>
                    <button class="btn !w-full uppercase">Add to Cart</button>

                </div>
            </div>
        </div>
        <div class="block mt-16  mb-4 md:mt-16 md:mb-8">
            <ul class="flex">
                <li><span class="inline-block px-8 py-4 cursor-pointer" :class="[is_review_selected ? ''  : activeTabClass ]" @click="tabEvent(false)">Description</span></li>
                <li class="ml-4"><span class="inline-block px-8 py-4 cursor-pointer" :class="[is_review_selected ? activeTabClass  : '' ]" @click="tabEvent(true)">Review(0)</span></li>
            </ul>
            <div id="tab-content" class="block bg-[#f5f5f5]">
                <ProductDescription :description="product.long_description" :class="[is_review_selected ? 'hidden'  : '' ]"></ProductDescription>
                <ProductReview :class="[is_review_selected ? ''  : 'hidden' ]"></ProductReview>
            </div>
        </div>
    </div>
    </div> 
    <FeatureProduct></FeatureProduct>
</template>