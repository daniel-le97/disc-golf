<script lang="ts" setup>
const bannerItems = ref([
  {
    name: 'members',
    number: 219806,
  },
  {
    name: 'posted scores',
    number: 3632411,
  },
  {
    name: 'tournaments',
    number: 66339,
  },
  {
    name: 'leagues',
    number: 10045,
  },
  {
    name: 'clubs',
    number: 11812,
  },
  {
    name: 'courses',
    number: 12034,
  },

])
</script>

<template>
  <section
    class="relative flex items-center   mb-8 bg-black min-h-[84vh] "
  >
    <div class=" w-1/2 flex items-center justify-center">
      <div class="">
        Create a profile and start contributing!
      </div>
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
    </div>
    <div class=" w-1/2">
      <img src="/vecteezy_vector-disc-golf-t-shirt-design-modern-typography_20548240.jpg" alt="" class="object-fit  w-4/5 ">
    </div>

    <div class="absolute -bottom-8 w-full  py-4 flex items-center justify-center bg-white shadow-xl bg-zinc-800">
      <div v-for="bannerItem in bannerItems" :key="bannerItem.name" class=" p-2  flex space-x-0.5 bg-gray-200 mx-2 rounded shadow-md">
        <span class="text-green-600">
          {{ bannerItem.number }}
        </span>
        <span class="mx-3">
          ·
        </span>
        <span>
          {{ bannerItem.name }}
        </span>
      </div>
    </div>
  </section>
</template>

<style>

</style>
