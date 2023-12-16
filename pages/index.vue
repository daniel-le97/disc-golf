<script lang="ts" setup>
import RecentAces from '~/components/index/RecentAces.vue'
import RecentScores from '~/components/index/RecentScores.vue'
import Banner from '~/components/index/Banner.vue'
import Features from '~/components/index/Features.vue';
import Hero from '~/components/index/Hero.vue';
import Contact from '~/components/index/Contact.vue'
</script>

<template>
  <main class="min-h-screen   ">
    <Hero />

  
      <Banner />
 

   
      <Features/>
  



      <div class="mt-16">
           <div class=" flex flex-col items-center my-3 ">
      <hr class="h-2 bg-emerald-600 w-1/6 mb-3">
      <h2 class="font-extrabold text-5xl  ">Recent Events</h2>
    </div>
    <div class="lg:flex  px-4 py-10 space-y-5 lg:space-y-0 lg:px-20  lg:space-x-24  lg:py-20">
      
      <div class="lg:w-1/2">
        <RecentScores />
      </div>
      <div class="lg:w-1/2">
        <RecentAces />
      </div>
    </div>
      </div>


      <Contact/>
  </main>
</template>

<style>

</style>
