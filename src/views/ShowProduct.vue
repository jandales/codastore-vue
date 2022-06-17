<script>
    import ProductDescription from '../components/ProductDescription.vue'
    import ProductReview from '../components/ProductReview.vue'
    import FeatureProduct from '../components/FeatureProduct.vue';

    export default{
    data() {
        return {
            is_review_selected: false,
            activeTabClass: "bg-[#f5f5f5]",
        };
    },
    methods: {
        tabEvent(state) {
            this.is_review_selected = state;
        }
    },
    components: { ProductDescription, ProductReview, FeatureProduct }
}
</script>
<template>
    <div class="w-full md:w-[900px] mx-auto p-4 mt-4 md:mt-8 md:p-0">
         <div class="flex flex-col md:flex-row">
            <div class="w-full md:basis-6/12">
               <div class="block">
                     <div class="w-full md:w-[80%] flex flex-col">
                        <figure class="mb-4">
                            <img src="../assets/img/collection1.webp" class="w-full md:w-100 "  alt="">
                        </figure>
                        <ul class="flex w-full  gap-4">
                            <li class="w-[calc(((100%_+_1rem)_/_4)_-_1rem)]">
                                <img src="../assets/img/collection1.webp" class="w-full h-full aspect-square"  alt="">
                            </li >
                            <li class="w-[calc(((100%_+_1rem)_/_4)_-_1rem)]">
                                <img src="../assets/img/collection2.webp" class="w-full h-full aspect-square"  alt="">
                            </li>
                            <li class="w-[calc(((100%_+_1rem)_/_4)_-_1rem)]">
                                <img src="../assets/img/collection3.webp" class="w-full h-full aspect-square"  alt="">
                            </li>
                            <li class="w-[calc(((100%_+_1rem)_/_4)_-_1rem)]">
                                <img src="../assets/img/collection1.webp" class="w-full h-full aspect-square"  alt="">
                            </li>                      
                         </ul>
                     </div>
                    
               </div>
            </div>
            <div class="basis-6/12">
                <div class="block">
                    <h1 class="block mb-2 text-theme font-semibold tracking-wildest mt-4 md:mt-0">Product Name</h1>
                    <ul>
                        <li></li>
                    </ul>
                    <span class="block mb-2 text-theme ">$50.00</span>
                    <p class="block mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <ul class="mt-4">
                        <li>
                            <span class="block">Color :</span>
                            <ul class="flex gap-2 mt-2">
                                <li><span class="border border-gray-300 p-2 text-xs" >Red</span></li>
                                <li><span class="border border-gray-300 p-2 text-xs" >Gray</span></li>
                                <li><span class="border border-gray-300 p-2 text-xs" >BLue</span></li>
                                <li><span class="border border-gray-300 p-2 text-xs" >Red</span></li>
                            </ul>
                        </li>                        
                    </ul>
                    <div class="w-[140px] h-[45px] flex flex-row border border-gray-200 mt-8">
                        <div class="w-[45px] flex justify-center items-center p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                            </svg>
                        </div>
                        <input type="text" class="w-[calc(100%_-_90px)]  text-center px-2 bg-[#eee] border-l  border-r border-gray-200" value="1"  alt="">
                        <div class="w-[45px] flex justify-center items-center">
                             <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4"  fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                        </div>
                    </div>
                    <br>
                    <button class="btn uppercase">Add to Cart</button>

                </div>
            </div>
        </div>
        <div class="block mt-16  mb-4 md:mt-16 md:mb-8">
            <ul class="flex">
                <li><span class="inline-block px-8 py-4 cursor-pointer" :class="[is_review_selected ? ''  : activeTabClass ]" @click="tabEvent(false)">Description</span></li>
                <li class="ml-4"><span class="inline-block px-8 py-4 cursor-pointer" :class="[is_review_selected ? activeTabClass  : '' ]" @click="tabEvent(true)">Review(0)</span></li>
            </ul>
            <div id="tab-content" class="block bg-[#f5f5f5]">
                <ProductDescription :class="[is_review_selected ? 'hidden'  : '' ]"></ProductDescription>
                <ProductReview :class="[is_review_selected ? ''  : 'hidden' ]"></ProductReview>
            </div>
        </div>
    </div>
    <FeatureProduct></FeatureProduct>
</template>