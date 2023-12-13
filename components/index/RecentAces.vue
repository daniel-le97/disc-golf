<script lang="ts" setup>

</script>

<template>
  <div class="flex flex-col p-5 text-sm bg-gray-100 rounded border border-gray-300">
    <div class="mb-3 text-2xl font-semibold bg-green-500 text-white font-bold w-fit p-1 px-2 rounded border border-emerald-900">
      <h3>Recent Aces</h3>
    </div>
    <div
      v-for="i in 10"
      class=" border-b border-b-gray-300 p-2 hover:bg-gray-200 hover:shadow-lg transition-all duration-300 shadow-sm "
    >
      <p class="text-lg">
        Yesterday
      </p>
      <div class="flex justify-between items-center">
        <div class="flex space-x-0.5 items-center">
          <img
            :src="`https://i.pravatar.cc/150?img=${i}`" alt="player picture"
            class="w-12 h-12 object-cover rounded border border-emerald-900"
          >
          <div class="p-1">
            <p class="text-green-600 font-bold">
              Jordan Lee
            </p>
            <p class="text-xs text-green-600">
              Tyger River
            </p>
            <p class="text-xs">
              Duncan, SC, USA
            </p>
          </div>
        </div>
        <div>
          <div class="flex space-x-1 items-center  justify-end ">
            <p>71</p>
            <p class="text-xl font-semibold">
              +9
            </p>
          </div>
          <p class="text-xs">
            Regular tees, 18 holes
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
