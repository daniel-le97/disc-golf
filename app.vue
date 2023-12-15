
<script setup lang="ts">
import BreadCrumbBar from './components/globals/BreadCrumbBar.vue';
import NavBar from './components/globals/NavBar.vue';
import Footer from './components/globals/Footer.vue'
</script>

<template>
 
  
  <NavBar />
  <div class="mt-16">
    <BreadCrumbBar />
    <NuxtLoadingIndicator :height="4" />
    <NuxtPage />
  </div>
  <Footer />
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.25rem);
}
</style>
