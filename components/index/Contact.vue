<template>
  <div class=" flex flex-col items-center my-3 ">
      <hr class="h-2 bg-emerald-600 w-1/6 mb-3">
      <h2 class="font-extrabold text-5xl  ">Contact</h2>
    </div>
  <div>
  

   <div class="lg:flex  items-center justify-center my-16 space-y-10 lg:space-y-0 lg:my-24 p-5 lg:p-20 ">

    <div class="lg:w-1/2 p-4 lg:p-10 flex flex-col space-y-5 dark:text-white">





   <div class="text-center sm:text-left">
        <h3 class="text-2xl font-extrabold">Contacts Details</h3>
    <hr class="lg:w-1/4 my-2">
              <ul class=" space-y-4 text-sm">
                <li>
                  <a
                    class="flex items-center w-fit  gap-1.5 "
                    href="/"
                  >
                      <Icon name="uil:envelope" class="text-2xl text-emerald-500" />
                    <span class="flex-1 ">john@doe.com</span>
                  </a>
                </li>

                <li>
                  <a
                    class=" flex items-center gap-1.5 w-fit"
                    href="/"
                  >
                   <Icon name="uil:phone" class="text-2xl" />
                    <span class="flex-1 ">0123456789</span>
                  </a>
                </li>

                <li
                  class="flex items-center justify-center  gap-1.5"
                >
               <Icon name="uil:location-point" class="text-2xl text-emerald-500" />
                  <address class="-mt-0.5 flex-1 not-italic ">
                    213 Lane, London, United Kingdom
                  </address>
                </li>
              </ul>
            </div>















<div class="">
  <h3 class="text-2xl font-extrabold">Socials</h3>
    <hr class="lg:w-1/4 my-2">
  <ul>
    <li>
     <a href="">
      Facebook
     </a>
    </li>
    <li>
     <a href="">
      Instagram
     </a>
    </li>
    <li>
     <a href="">
     X
     </a>
    </li>
    <li>
     <a href="">
      Youtube
     </a>
    </li>
  </ul>

</div>

    </div>
<div class="lg:w-1/2 z-10 relative group">
    <div class="space-y-5 p-10 shadow-md rounded backdrop-blur-md border-2 border-gray-100/20">
      <div class="flex items-center justify-between gap-1.5 text-emerald-950 dark:text-white">
        <h3 class="text-4xl font-extrabold ">Get In Touch</h3>
        <Icon name="material-symbols:connect-without-contact-outline-rounded" class="text-8xl drop-shadow-md " />
      </div>
    <p>Have any questions or concerns regarding events, tournaments or feedback for the website fill out the form and get in contact with someone! </p>

<UFormGroup
  size="xl"
  label="Name"
  required
>
  <UInput placeholder="John Doe" icon="i-heroicons-user"  />
</UFormGroup>
<UFormGroup
  size="xl"
  label="Email" 
  required
  
 
>
  <UInput placeholder="you@example.com" icon="i-heroicons-envelope" />
</UFormGroup>
<UTextarea required size="xl" placeholder="body..." />
    </div>
      <div class="absolute inset-0 w-full h-full rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-900 rotate-[2deg] lg:rotate-[12deg] border-4 border-emerald-300/20 -z-10 group-hover:lg:rotate-[0deg] transition-all duration-500"></div>
  </div>

</div>



   </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>

a{
  color: #10B981;
  font-weight: 600;
  font-size: 1.2rem;
  position: relative;
  
}

a:before{
  @apply bg-emerald-800 absolute w-0 h-[2px] -bottom-[6px] transition-all duration-500 ease-in-out; 
  content: "";
 
}

a:hover:before{
  width: 100%;
 
}
</style>