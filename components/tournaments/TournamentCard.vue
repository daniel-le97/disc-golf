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
  <NuxtLink  :to="`tournaments/${title}`" class="flex border-b border-b-gray-300 p-2 hover:bg-gray-200 dark:hover:bg-zinc-900 transition-all duration-150 text-gray-500 hover:text-gray-700 dark:hover:text-gray-100 space-x-2 dark:text-gray-200">
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
      <div class="flex flex-col lg:flex-row lg:space-x-6  ">
        <span class="text-emerald-500 text-xl underline">{{ title }}</span>
     
        <UBadge v-if="registrationOpen" :ui="{ rounded: 'rounded-full' }" class="bg-orange-400 dark:bg-orange-400 shadow-md my-2  !text-white lg:my-0 w-fit" size="xs">Registration Open</UBadge>
      </div>
      <p class="text-sm">
        at {{ location }}
      </p>
      <p class="text-sm">
        Hosted by {{ host }}
      </p>
    </div>
    <div>
      <p class="text-xl font-semibold">
        C-Tier
      </p>
      <div class="w-1/6 flex items-center justify-center space-x-1">
        <p class="text-xs">
          Registrants:
        </p>
        <p class="text-emerald-500 text-lg">
          {{ registrants }}
        </p>
      </div>
    </div>
  </NuxtLink>
</template>

<style>

</style>
