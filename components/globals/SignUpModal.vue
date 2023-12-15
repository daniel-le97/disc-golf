<template>
     <div>
        <UButton label="Sign Up" @click="isOpen = true" size="xl"  class="!font-bold !text-white !bg-emerald-500"/>

        <UModal v-model="isOpen">
          <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
            <template #header>
              <div class=" text-3xl">
  Sign Up
              </div>
            </template>

         <div class="space-y-5">
                    <UFormGroup label="Name" required>
        <UInput placeholder="John Doe" icon="i-heroicons-user"  />
      </UFormGroup>
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

<script lang="ts" setup>
const isOpen = ref(false)
</script>

<style>

</style>