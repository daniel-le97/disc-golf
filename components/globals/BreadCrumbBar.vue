<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'


interface BreadcrumbItem {
  to: string
  label: string
}
const route = useRoute()

const items = ref<BreadcrumbItem[]>([])

function updateBreadcrumb() {
  // Extract the route segments and create breadcrumb items
  const segments = route.path.split('/').filter(segment => segment !== '')
  items.value = segments.map((segment, index) => ({
    to: `/${segments.slice(0, index + 1).join('/')}`,
    label: segment,
  }))
}


function getBreadcrumbIcon (label:string) {
  // Use a switch statement or other logic to determine the icon based on the route
  switch (label) {
    case 'tournaments':
      return   'tabler:tournament';
    case 'leagues':
      return  'carbon:partition-specific';
  case 'clubs':
  return 'simple-icons:clubhouse';
  case 'courses':
  return 'material-symbols:flag-rounded';
  case 'series':
  return 'simple-icons:steelseries';
    default:
      return 'tdesign:component-breadcrumb';
  }
}

onMounted(() => updateBreadcrumb)

watchEffect(() => updateBreadcrumb())
</script>

<template>
  <nav class=" w-full px-1 lg:px-20 flex-wrap lg:flex-nowrap  flex items-center  py-1.5 bg-gray-200 dark:bg-zinc-700 dark:text-white shadow-md text-sm ">
    <NuxtLink to="/" class="text-sm flex items-center gap-1 hover:text-emerald-500 transition-colors duration-300">
   <Icon name="uil:home" class=""  />
      <span>Home</span>
    </NuxtLink>
  <Icon name="material-symbols:chevron-right-rounded" class=" text-lg" />
    <span v-for="(item, index) in items" :key="index" class=" flex items-center hover:text-emerald-500 transition-colors duration-300">
      
      <NuxtLink :to="item.to" class="flex items-center">
          <Icon :name="getBreadcrumbIcon(item.label)" class="  mr-1"   
      
         
           />

        
        <span>
           {{ item.label }} 
        </span>
        
        </NuxtLink>
      <span v-if="index < items.length - 1"  class="flex items-center">    <Icon name="material-symbols:chevron-right-rounded" class="text-lg " /></span>
    </span>
    
  </nav>
</template>

<style scoped>
.breadcrumb {
  margin: 10px 0;
}

.separator {
  margin: 0 5px;
  color: #999;
}
</style>


<!-- 

TO HIGHLIGHT ICON WHEN ROUTE MATCHES
     :class="{ 'text-white': route.path !== `/${item.label}`, 'text-emerald-500': route.path === `/${item.label}` }"
 -->