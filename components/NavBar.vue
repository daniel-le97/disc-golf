<script  setup>
import { onMounted, ref } from 'vue'

// generate a list of links that has to an id, to which will be home,tournaments,leagues,clubs,courses,series,videos,trading post,contact
const items = ref([
  { name: 'Home', href: '/' },
  { name: 'Tournaments', href: '/tournaments' },
  { name: 'Leagues', href: '/leagues' },
  { name: 'Clubs', href: '/clubs' },
  { name: 'Courses', href: '/courses' },
  { name: 'Series', href: '/series' },
])

const indicatorPosition = ref(0)

// Function to update the indicator position based on the active link
function updateIndicatorPosition() {
  const activeLink = document.querySelector('.active')
  if (activeLink)
    indicatorPosition.value = activeLink.offsetLeft
}
onMounted(() => {
  updateIndicatorPosition()
})
</script>

<template>
  <div class="w-full h-16 shadow-md flex items-center justify-center bg-zinc-800 text-white py-0 px-5">
    <div class="flex w-full h-full space-x-4 justify-between">
      <div class="px-5 flex space-x-4 items-center justify-center">
        <img
          src="/vecteezy_vector-disc-golf-t-shirt-design-modern-typography_20548240.jpg" alt="logo"
          class="rounded-full shadow-md w-12 h-12"
        >
        <span class="font-bold text-xl">
          Disk Golf Scene
        </span>
      </div>
      <div class="flex space-x-4  items-end relative ">
        <NuxtLink
          v-for="item in items" :key="item.name" :to="item.href" class="text-lg" active-class="active"
          @click="updateIndicatorPosition"
        >
          {{ item.name }}
        </NuxtLink>
        <!-- <span class="indicator" :style="{ transform: 'translateX(' + indicatorPosition + 'px)' }"></span> -->
      </div>
    </div>
  </div>
</template>

<style>
.link {
  @apply cursor-pointer;
}

.active {
  @apply bg-gradient-to-b from-emerald-500 to-zinc-700  rounded-t-sm px-2 transition-all duration-300;
}

.indicator {
  @apply  w-12 h-2 absolute -bottom-5  bg-gray-100 rounded-t transition-transform duration-300;
}
</style>
