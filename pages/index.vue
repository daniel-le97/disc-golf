<script lang="ts" setup>
import RecentAces from '~/components/index/RecentAces.vue'
import RecentScores from '~/components/index/RecentScores.vue'
import Banner from '~/components/index/Banner.vue'
import Features from '~/components/index/Features.vue';
</script>

<template>
  <main class="min-h-screen   bg-white ">
    <Hero />

  
      <Banner />
 

   
      <Features/>
  
    <div class="flex px-20  space-x-24 mt-24 py-20">
      <div class="lg:w-1/2">
        <RecentScores />
      </div>
      <div class="lg:w-1/2">
        <RecentAces />
      </div>
    </div>
  </main>
</template>

<style>

</style>
