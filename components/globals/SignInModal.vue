<script setup>
const isOpen = ref(false)
</script>

<template>
  <div>
    <UButton label="Sign In" @click="isOpen = true" class=""   />
    <UModal v-model="isOpen" :ui="{overlay:{background:'bg-black/80 backdrop-blur-sm '},}">
      <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
         <div class="text-2xl">
          Sign In
         </div>
        </template>
    <div class="space-y-5">
          <UFormGroup label="Email" required>
    <UInput placeholder="you@example.com" icon="i-heroicons-envelope" />
  </UFormGroup>
          <UFormGroup label="Password" required>
      <UInput placeholder="*******" icon="i-heroicons-lock-closed" />
    </UFormGroup>
     <UFormGroup label="Confirm Password" required>
        <UInput placeholder="*******" icon="i-heroicons-lock-closed" />
      </UFormGroup>
      <UButton>Sign in</UButton>
    </div>
        <!-- <template #footer>
          <Placeholder class="h-8" />
        </template> -->
      </UCard>
    </UModal>
  </div>
</template>