<script>
    import ProductDescription from '../components/ProductDescription.vue'
    import ProductReview from '../components/ProductReview.vue'
    import FeatureProduct from '../components/FeatureProduct.vue';

    export default{
    data() {
        return {
            apiBase : 'http://127.0.0.1:8000',
            product : null,
            is_review_selected: false,
            activeTabClass: "bg-[#f5f5f5]",
        };
    },
    methods: {
        tabEvent(state) {
            this.is_review_selected = state;
        }
    },
    created () {  

         this.axios
            .get(`http://127.0.0.1:8000/api/v1/products/${this.$route.params.item}`)
            .then(response => {  
                this.product = response.data.product;
           
            });
    },
    components: { ProductDescription, ProductReview, FeatureProduct },
    computed : {
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
        }
    }
}
</script>
<template>

    <div class="container md:m-auto">
         <div class="w-full  p-4 mt-4 md:mt-8 md:p-0">
         <div class="flex flex-col md:flex-row">
            <div class="w-full md:w-3/5">
               <div class="block">
                     <div class="w-full flex">
                        <ul class="flex flex-col gap-4">
                            <li v-for="photo in product.photos" class="w-20">
                                <img :src="apiBase+photo.path" class="w-full h-full aspect-square"  alt="">
                            </li >
                                              
                         </ul>
                        <figure class="ml-8 mb-4">
                            <img :src="apiBase+product.imagePath" class="w-full md:w-100 "  alt="">
                        </figure>
                        
                     </div>
                    
               </div>
            </div>
            <div class="w-2/5 ml-8">
                <div class="block">
                    <h1 class="block text-theme font-semibold  tracking-widest uppercase mt-4 md:mt-0 mb-2">{{ product.name }}</h1>
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
                                <li v-for="variant in item.items">
                                    <span class="flex items-center justify-center border border-gray-300  text-xs capitalize p-5 w-8 h-8"><label for="">{{variant}}</label></span>
                                </li>                               
                            </ul>
                        </li>                        
                    </ul>
                    <div class="w-[140px] h-[45px] flex flex-row border border-gray-200 mt-8">
                        <span class="w-[45px]  flex justify-center items-center p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                            </svg>
                        </span>
                        <input type="text" class="!w-[calc(100%_-_90px)]  text-center px-2   !border-0 " value="1"  alt="">
                        <span class="w-[45px] flex justify-center items-center">
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