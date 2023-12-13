<template>
  <div class="w-full h-16 shadow-md flex items-center justify-center">
    
    <div class="flex w-full space-x-4 items-center justify-between">
<div class=" font-bold text-xl px-5 ">
  Disk Golf Scene
</div>

<div class="flex space-x-4 px-5">
  <NuxtLink  v-for="item in items" :to="item.href" :key="item.name">
     {{ item.name }}
  </NuxtLink>
</div>

    </div>
  </div>
</template>

<script lang="ts" setup>
// generate a list of links that has to an id, to which will be home,tournaments,leagues,clubs,courses,series,videos,trading post,contact
const items = ref([
  { name: 'Home', href: '/' },
  { name: 'Tournaments', href: '/tournaments' },
  // { name: 'Leagues', href: '/leagues' },
  // { name: 'Clubs', href: '/clubs' },
  // { name: 'Courses', href: '/courses' },
  // { name: 'Series', href: '/series' },
  // { name: 'Videos', href: '/videos' },
  // { name: 'Trading Post', href: '/trading-post' },
  // { name: 'Contact', href: '/contact' },
])
</script>

<style>

</style>