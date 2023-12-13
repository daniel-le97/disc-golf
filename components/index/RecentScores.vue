<template>
  <div  class="flex flex-col p-5">
    <div class="mb-3 text-2xl font-semibold">
      <h3 >Recent Scores</h3>
    </div>
   <div v-for="i in 10"  class=" border-b-2 border-b-gray-300 p-2 hover:bg-gray-200 hover:shadow-xl transition-all duration-300">
 <p class="text-lg">Yesterday</p>
 <div class="flex justify-between items-center">
  <div class="flex space-x-0.5">
    <img :src="`https://i.pravatar.cc/150?img=${i}`" alt="player picture" class="w-16 h-16 object-cover rounded" /> 
     <p>Jordan Lee</p>
     <p>Tyger River</p>
     <p>Duncan, SC, USA</p>
  </div>
  <div>
    <div class="flex space-x-1">
        <p>71</p>
       <p class="text-lg font-semibold">+9</p>
    </div>
      <p>Regular tees, 18 holes</p>
  </div>
 </div>
   </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>