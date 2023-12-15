<template>
     <div>
        <UButton label="Open" @click="isOpen = true" />

        <UModal v-model="isOpen">
          <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
            <template #header>
              <div class=" text-3xl">
  Login
              </div>
            </template>

              <div class="">
            <form class="w-full ">
              <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                  <label class="block text-emerald-600 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                    Name
                  </label>
                </div>
                <div class="md:w-2/3">
                  <input id="inline-full-name" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" value="Jane Doe">
                </div>
              </div>
              <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                  <label class="block text-emerald-600 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                    Email
                  </label>
                </div>
                <div class="md:w-2/3">
                  <input id="inline-full-name" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" value="janedoe@email.com">
                </div>
              </div>
              <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                  <label class="block text-emerald-600 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                    Password
                  </label>
                </div>
                <div class="md:w-2/3">
                  <input id="inline-password" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="password" placeholder="******************">
                </div>
              </div>

              <div class="md:flex md:items-center">
                <div class="md:w-1/3" />
                <div class="md:w-2/3">
                  <button class="shadow bg-green-600 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded transition-all duration-300" type="button">
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
            <div class="flex  justify-center mt-4">
              <p class=" text-xs text-white   w-2/3 ">
                By signing up, you agree to the Terms of Use

                See our Privacy Policy
              </p>
            </div>
          </div>

            <template #footer>
              <Placeholder class="h-8" />
            </template>
          </UCard>
        </UModal>
      </div>
</template>

<script lang="ts" setup>
const isOpen = ref(false)
</script>

<style>

</style>