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

const loginData = ref({
  email: '',
  password: '',
  register: false,
})

async function login() {
  
  // TODO: swich to authjs
  // makeshift login functionality for dev
  if (loginData.value.register) {
    await authRegister(loginData.value.email, loginData.value.password)
    return
  }

  await authLogin(loginData.value.email, loginData.value.password)
}
</script>

<template>
  <section
    class="relative  flex flex-col items-center justify-center bg-black hero-image   min-h-[50vh]  lg:min-h-screen "
  >
   <div class=" text-center p-10">
    <h1 class="text-white text-4xl lg:text-7xl font-extrabold leading-relaxed">Join a Thriving <span class="text-emerald-500"> Disc Golf</span> Community, Sharing <span class="text-emerald-500"> Skills</span> and <span class="text-emerald-500"> Passion</span>. </h1>
   </div>
    <div class=" w-1/2">
      <img src="/vecteezy_vector-disc-golf-t-shirt-design-modern-typography_20548240.jpg" alt="" class="object-fit  ">
    </div>

    <!-- <div class="absolute -bottom-8 w-full  py-4 flex items-center justify-center  shadow-xl bg-zinc-800">
      <div v-for="bannerItem in bannerItems" class=" p-2  flex space-x-0.5 bg-gray-200 mx-2 rounded shadow-md">
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
    </div> -->
  </section>
</template>

<style></style>
