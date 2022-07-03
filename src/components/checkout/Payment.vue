<template>
    <div>
        <ul >
            <li class="flex border p-4 border-b-0">
                <span class="block  min-w-[100px]">Contact</span>
                <span>jesusandales@gmail.com</span>
                <span class="font-semibold ml-auto text-dark cursor-pointer  hover:underline">Change</span>
            </li>
            <li class="flex border p-4 border-b-0">
                <span class="block  min-w-[100px]">Shipping</span>
                <span>jesusandales@gmail.com</span>
                <span class="font-semibold ml-auto text-dark cursor-pointer hover:underline">Change</span>
            </li>
            <li class="flex border p-4">
                <span class="block  min-w-[100px]">Method</span>
                <span>jesusandales@gmail.com</span>
                <span class="font-semibold ml-auto text-dark cursor-pointer hover:underline">Change</span>
            </li>
        </ul>

        <div class="mt-8">
           <h1 class="font-semibold text-lg">Payment</h1>           
            <div class="credit-card mt-1">
                <div class="flex justify-between mb-4">
                  <span class="block mt10">All Transactiion are secure and encrypted</span>
                    <span id="payment-option-change"  class="font-semibold ml-auto text-dark cursor-pointer hover:underline">Change</span>       
                </div>
                <div class="credit-card-body">
                    
                    <div class="form-block mb-4">                      
                        <input type="text" name="card_name"  validator-input="card_name" value="" placeholder="Name"/>
                    </div> 

                    <div class="form-block">                          
                            <div class="flex gap-2 border">
                                <input type="text" class="@w-1/2 !border-0" validator-input="card_number" name="card_number" placeholder="Card Number" value="">
                                <input type="text" class="!w-1/4 !border-0" name="card_expire_date"  validator-input="card_expire_date" placeholder="MM/YY" value=""/>
                                <input type="text" class="!w-1/4 !border-0" name="card_cvc"  validator-input="card_cvc" value="" placeholder="CVC"/>
                            </div>
                    </div>
            
            
                
                </div>
            </div>
        </div>

        <div class="flex items-center w-full mt-8">
                    <router-link to="/cart" class="flex items-center">
                         <span >
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                            </svg>
                        </span>
                       <label for="" class="ml-2 cursor-pointer"> Return Cart</label>
                    </router-link>
               
                <router-link  to="/fasf" class="block btn ml-auto">Place Order</router-link>
        </div>
    </div>
</template>