<template>
  <nav class=" w-full px-20  flex items-center py-1 bg-zinc-700 text-white shadow-md">
    <NuxtLink to="/"  class="text-sm">
      home 
    </NuxtLink>
     <span  class="separator"> > </span>
    <span v-for="(item, index) in items" :key="index" class="text-sm">
      <NuxtLink :to="item.to">{{ item.label }}</NuxtLink>
      <span v-if="index < items.length - 1" class="separator"> > </span>
    </span>
  </nav>
</template>

<script setup >
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const items = ref([]);

const updateBreadcrumb = () => {
  // Extract the route segments and create breadcrumb items
  const segments = route.path.split('/').filter(segment => segment !== '');
  items.value = segments.map((segment, index) => ({
    to: `/${segments.slice(0, index + 1).join('/')}`,
    label: segment,
  }));
};

onMounted(() => {
  updateBreadcrumb();
}),

watchEffect(()=>{
  updateBreadcrumb()
})
</script>

<style scoped>
.breadcrumb {
  margin: 10px 0;
}

.separator {
  margin: 0 5px;
  color: #999;
}
</style>
