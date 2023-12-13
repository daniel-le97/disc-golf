<template>
  <section
    class="relative bg-[url(https://images.unsplash.com/photo-1616840388998-a514fe2175b9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat w-full min-h-[90vh] flex items-center justify-center pb-24 mb-24"
  >
 




<div class="absolute -bottom-8 w-[95%]   py-2 flex items-center justify-center bg-white rounded shadow-xl">
 <div v-for="bannerItem in bannerItems" class=" p-2  flex space-x-0.5 bg-gray-200 mx-2 rounded shadow-md" >
<span>
  {{bannerItem.number}} 
</span>
<span>
  {{bannerItem.name}}
</span>
 </div>

</div>

  </section>
</template>

<script lang="ts" setup>
const bannerItems = [
  {
    name:'members',
    number:219806
  },
    {
    name: 'posted scores',
    number: 3632411
  },
  {
    name: 'tournaments',
    number: 66339
  },
  {
    name: 'leagues',
    number: 10045
  },
  {
    name: 'clubs',
    number: 11812
  },
  {
    name: 'courses',
    number: 12034
  },


]
</script>

<style>

</style>