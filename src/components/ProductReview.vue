
<template>
   <div class="block  px-4 py-8   md:px-16 md:py-10">
    <div class="">
        <ul>            
            <li>  
                   
                        <div class="flex">
                            <div class="rounded-full overflow-hidden">                                                      
                                 <img src="../assets/background1.jpg" class="w-10 h-10" alt="">                                                                                                     
                            </div>
                            <div class="w-full  ml-8">
                                <div class="flex">
                                    <div class="comment-user">
                                        <p>Jesus Andales</p>
                                    </div>                                                        
                                    <ul class="flex gap-2 ml-auto">
                                       <li>*</li>
                                       <li>*</li>
                                       <li>*</li>
                                       <li>*</li>
                                       <li>*</li>
                                    </ul>                                    
                                </div>
                                    <p class="mt-1">  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    <div class="comment-action mt-1">
                                        <ul>
                                            <li><span class="edit-review"  rate="{{ $userReview->rating }}"><i class="far fa-edit"></i></span></li>
                                            <li>
                                                <form id="form-review-delete" action="{{ route('review.destroy',[ $userReview->encryptedId() ])}}" method="POST">
                                                 
                                                <button class="btn-link">
                                                    <i class="far fa-trash-alt"></i>
                                                </button>                                                
                                                </form>
                                                
                                            </li>
                                        </ul>
                                    </div> 
                            </div>
                           
                        </div>
                 
            
            </li>
        </ul>
    </div>

    <div class="w-full">
       <div>
            <h2 class="text-[#333] font-semibold">Add Review</h2>
            <p class="mt text-sm">Your email address will not be published.</p>
       </div>
       <div class="block mt-8">
           <div class="flex items-center">
                <h4 class="text-[#333] font-semibold">Your Rating</h4>
                     <ul class="flex items-center justify-center  gap-2   ml-4">
                        <li><font-awesome-icon icon="fa-solid fa-star" color="#ff523b" /></li>
                        <li><font-awesome-icon icon="fa-regular fa-star"  color="#ff523b" /></li>
                        <li><font-awesome-icon icon="fa-regular fa-star"  color="#ff523b" /></li>
                        <li><font-awesome-icon icon="fa-regular fa-star"  color="#ff523b" /></li>
                        <li><font-awesome-icon icon="fa-regular fa-star"  color="#ff523b" /></li>
                    </ul>                                       
           </div>
           <div class="block mt8">
                <div method="POST">                           
                        <input type="hidden" id="input-rate"  name="rate" value="0" hidden>
                        <div class="block mt-4">
                            <label for="#" class="block text-sm">Your Review</label>
                            <textarea id="text-editor" class="w-full content-none mt-4"  name="comments"  cols="30" rows="6"></textarea>
                        </div> 
                    <button class="btn mt-4">SUBMIT</button>    
                </div> 
            </div>
       </div>
    </div>

 
</div>
</template>