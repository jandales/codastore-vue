<script></script>
<template>  
      
           <div class="w-full md:w-[768px] px-4 mx-auto md:px-0">
             <div class="py-8">
                 <h1 class="text-xl uppercase">Contact Us</h1>
            </div>
            <div class="flex flex-col gap-4">
                <div class="flex flex-col md:flex-row gap-4">
                    <input type="text" name="name" class="px-3 py-2 box-border border w-full   md:w-[calc(100%_/_2)] outline-none" placeholder="Name">
                    <input type="text" name="email" class="px-3 py-2 box-border  border  w-full md:w-[calc(100%_/_2)] outline-none" placeholder="Email">
                </div>  
                <div class="block">
                    <input type="text" name="name" class="w-full box-border px-3 py-2 border  outline-none" placeholder="Phone">               
                </div> 
                <div class="block">
                    <Textarea col="12" class="w-full box-border  px-3 py-2 border outline-none" name="content" placeholder="Message">
                    </Textarea> 
                </div>  

                <button class="btn uppercase">Send</button> 
                <br>
            </div>   
           </div> 
 
</template>