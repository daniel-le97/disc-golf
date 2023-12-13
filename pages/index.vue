<script lang="ts" setup>
import RecentAces from '~/components/index/RecentAces.vue'
import RecentScores from '~/components/index/RecentScores.vue'
import Banner from '~/components/index/Banner.vue';
</script>

<template>
  <main class="min-h-screen ">
    <Hero />

    <div class="">
      <Banner/>
    </div>
    <div class="flex px-20  space-x-24 mt-24">
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
