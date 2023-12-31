<script  setup>
import { onMounted, ref } from 'vue';
import SignInModal from './SignInModal.vue';

// generate a list of links that has to an id, to which will be home,tournaments,leagues,clubs,courses,series,videos,trading post,contact
const items = ref([
  { name: 'Home', href: '/' },
  { name: 'Tournaments', href: '/tournaments' },
  { name: 'Shops', href: '/shops' },
  { name: 'Clubs', href: '/clubs' },
  { name: 'Courses', href: '/courses' },
  { name: 'Info/Donate', href: '/series' },
])

const profileDropdownItems = [
  [{
    label: 'ben@example.com',
    slot: 'account',
    disabled: true,
  }],
  [{
    label: 'Profile',
    icon: 'i-heroicons-user',
  }],
  [{
    label: 'Settings',
    icon: 'i-heroicons-cog-8-tooth',
  }],
  [{
    label: 'Sign out',
    icon: 'i-heroicons-arrow-left-on-rectangle',
  }],
]
const indicatorPosition = ref(0)

onMounted(() => {
  updateIndicatorPosition()
})

// Function to update the indicator position based on the active link
function updateIndicatorPosition() {
  const activeLink = document.querySelector('.active')
  if (activeLink)
    indicatorPosition.value = activeLink.offsetLeft
}

const drawerIsOpen = ref(false)

const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  },
})
</script>

<template>
  <div class="w-full h-16 flex items-center justify-center shadow-md dark:bg-zinc-800 bg-gray-100 text-zinc-900 dark:text-white py-0 px-5 fixed top-0 z-50">
    <div class="flex w-full h-full space-x-4 justify-between">
      <div class="px-5 flex space-x-4 items-center justify-center">
        <img
          src="/vecteezy_vector-disc-golf-t-shirt-design-modern-typography_20548240.jpg" alt="logo"
          class="rounded-full shadow-md w-12 h-12"
        >
        <span class="font-extrabold lg:text-2xl">
          GSDGC
        </span>
      </div>
      <div class="lg:flex space-x-4  items-center relative hidden  ">
        <NuxtLink
          v-for="item in items" :key="item.name" :to="item.href" class="text-lg" active-class="active"
          @click="updateIndicatorPosition"
        >
          {{ item.name }}
        </NuxtLink>
        <!-- <span class="indicator" :style="{ transform: 'translateX(' + indicatorPosition + 'px)' }"></span> -->
      </div>
      <div class=" hidden lg:flex items-center justify-center space-x-4">
        <div>
          <SignInModal />
        </div>
        <UDropdown :items="profileDropdownItems" :ui="{ item: { disabled: 'cursor-text select-text' } }" :popper="{ placement: 'bottom-start' }">
          <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" />

          <template #account="{ item }">
            <div class="text-left">
              <p>
                Signed in as
              </p>
              <p class="truncate font-medium text-gray-900 dark:text-white">
                {{ item.label }}
              </p>
            </div>
          </template>

          <template #item="{ item }">
            <span class="truncate">{{ item.label }}</span>

            <UIcon :name="item.icon" class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto" />
          </template>
        </UDropdown>

        <ClientOnly>
          <UButton
            :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
            color="gray"
            variant="ghost"
            aria-label="Theme"
            @click="isDark = !isDark"
          />

          <template #fallback>
            <div class="w-8 h-8" />
          </template>
        </ClientOnly>
      </div>
      <!-- MOBIlE MENU -->
      <div class="flex items-center lg:hidden ">
        <Icon name="solar:hamburger-menu-broken" class="text-5xl" @click="drawerIsOpen = true" />

        <USlideover v-model="drawerIsOpen">
          <div class="p-4 flex-1 bg-zinc-900">
            <Icon name="solar:close-square-bold" class="text-5xl" @click="drawerIsOpen = false" />

            <div class="flex flex-col lg:space-x-4  items-center justify-between  relative space-y-10 my-10  ">
              <NuxtLink
                v-for="item in items" :key="item.name" :to="item.href" class="text-5xl font-extrabold" active-class="active"
                @click="drawerIsOpen = false"
              >
                {{ item.name }}
              </NuxtLink>
              <!-- <span class="indicator" :style="{ transform: 'translateX(' + indicatorPosition + 'px)' }"></span> -->
            </div>
          </div>
        </USlideover>
      </div>
      <!-- !MOBIlE MENU -->
    </div>
  </div>
</template>

<style>
.link {
  @apply cursor-pointer;
}

.active {
  @apply text-emerald-500 transition-all duration-300;
}

.indicator {
  @apply  w-12 h-2 absolute -bottom-5  bg-gray-100 rounded-t transition-transform duration-300;
}
</style>
