<script lang="ts" setup>
defineProps({
  title: String,
  host: String,
  location: String,
  date: String,
  registrationOpen: Boolean,
  registrants: String,
})
</script>

<template>
  <NuxtLink :to="`tournaments/${title}`" class="flex border-b border-b-gray-300 p-2 hover:bg-gray-200 transition-all duration-150 text-gray-500 hover:text-gray-700 space-x-2">
    <div class="w-1/8  p-1 flex flex-col items-center justify-center">
      <p class="text-sm">
        December
      </p>
      <p class="text-xl text-medium">
        14
      </p>
      <p class="text-sm">
        Friday
      </p>
    </div>
    <div class="w-5/6 ">
      <div class="flex space-x-3">
        <a class="text-emerald-500 text-lg underline">{{ title }}</a>
        <button v-if="registrationOpen" class="rounded-full  px-2  bg-orange-400 text-white text-xs flex items-center justify-center shadow-sm hover:bg-orange-300 hover:shadow-xl transition-all duration-150  ">
          Registration Open
        </button>
      </div>
      <p class="text-sm">
        at {{ location }}
      </p>
      <p class="text-sm">
        Hosted by {{ host }}
      </p>
    </div>
    <div class="w-1/6 flex items-center justify-center space-x-1">
      <p>Registrants:</p>
      <p class="text-emerald-500 text-lg">
        {{ registrants }}
      </p>
    </div>
  </NuxtLink>
</template>

<style>

</style>
