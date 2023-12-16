<script lang="ts" setup>
import { ref } from 'vue'
import Tournaments from '../../data/Tournaments.json'

const tournaments = ref(Tournaments)
const route = useRoute()

const tournament = tournaments.value.find(t => t.title == route.params.title)



const items = [
  {
  key: 'about',
  label: 'About',
  icon:'uil:github',
  description: 'Make changes to your account here. Click save when you\'re done.'
},
 {
  key: 'register',
  label: 'Register',
  description: 'Change your password here. After saving, you\'ll be logged out.'
}
  ,
  {
    key: 'registeredPlayers',
    label: 'Registered Players',
    description: 'Change your password here. After saving, you\'ll be logged out.'
  }
  ,
  {
    key: 'pictures',
    label: 'Pictures',
    description: 'Change your password here. After saving, you\'ll be logged out.'
  }
  ,
  {
    key: 'videos',
    label: 'Videos',
    description: 'Change your password here. After saving, you\'ll be logged out.'
  }
  ,
  {
    key: 'comments',
    label: 'Comments',
    description: 'Change your password here. After saving, you\'ll be logged out.'
  }
]



//grab the screen size when it's mobile 
const isMobile = ref(false)

const checkIsMobile = () => {
  isMobile.value = window.innerWidth < 768; // Adjust the breakpoint as needed
};

onMounted(() => {
  // Initial check on mount
  checkIsMobile();

  // Listen for window resize events
  window.addEventListener('resize', checkIsMobile);
});

onBeforeUnmount(() => {
  // Remove the event listener when the component is destroyed
  window.removeEventListener('resize', checkIsMobile);
});
</script>

<template>
  <main v-if="tournament" class="min-h-screen  lg:px-20 bg-white text-zinc-900">
    <div class="lg:flex lg:space-x-5">
        <!-- LEFT COLUMN -->
      <div class="lg:w-1/6 space-y-5 mb-10 lg:mb-0 p-6 lg:p-0 lg:pt-6 lg:sticky h-full top-0">
        <div class=" border-black/30 border-2 text-2xl  py-2 bg-orange-500 text-white font-extrabold drop-shadow  shadow-inset flex justify-center rounded items-center gap-1.5 ">
          <Icon name="tabler:tournament" class="text-3xl" />
        <span> Tournament</span>
        </div>
        <div class=" text-center text-xl">
          HOSTED BY: <br>

          <p class="text-green-600 underline">
            {{ tournament.host }}
          </p>
        </div>

        <div class=" flex items-center justify-center">
          <img src="/vecteezy_vector-disc-golf-t-shirt-design-modern-typography_20548240.jpg" alt="" class="rounded-full object-fit w-44 shadow-md">
        </div>
      </div>
    
      <!-- !LEFT COLUMN -->
      <!-- RIGHT COLUMN -->
    
      <div class=" lg:w-5/6">
        <h1 class="text-8xl font-extrabold px-2 lg:px-0  ">
          {{ tournament.title }}
        </h1>
        <div class="my-2 px-2 lg:px-0">
          {{ tournament.date }} at {{ tournament.location }}
        </div>

        <!-- TABS -->
  

    <UTabs  
    :orientation="isMobile ? 'vertical' : 'horizontal'"
    
    :items="items" 
    :ui="{wrapper:'space-y-0', container:' ',
    list: { background:'dark:bg-gray-100',width: 'w-full',height:'h-[3.5rem]', 
    marker: { background: 'bg-emerald-700 dark:bg-emerald-700' },
    base:'border-b-4 border-b-emerald-700 rounded-none  rounded-t-md    gap-2',padding:'p-2',
    tab:{
      base:'hover:bg-emerald-700/20 ',
      size:'text-xl ',
      height:' h-16 lg:h-12'
    },
    
  }, 
}"
    >

      <template #default="{ item, index, selected }">
          <div class="flex items-center justify-center relative truncate mb ">
         

            <span class="truncate text-white" :class="selected ? '' : 'text-zinc-800'">{{ item.label }}</span>

      
          </div>
        </template>






        <template #item="{ item }">
          <UContainer :ui="{ padding: 'p-0 lg:p-0 md:p-0',constrained:'max-w-9xl' }">
              <template #header>
                <p class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                  {{ item.label }}
                </p>
                <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {{ item.description }}
                </p>
              </template>

              <div v-if="item.key === 'about'" class="space-y-3 ">
               <div class=" lg:flex  lg:p-5 lg:pl-0 bg-emerald-300/20 dark:bg-emerald-300/20 border border-emerald-900/20 rounded-b">
                <!-- LEFT COLUMN -->
                <div class="lg:w-3/5 p-2 bg-white border rounded lg:rounded-l-none border-l-0 border-emerald-900/20">
                  <div class="flex w-full items-center justify-center">
                    <button class="p-2 bg-green-500 px-4 text-white font-bold text-2xl border-emerald-900/30 rounded border-2">
                      REGISTER ONLINE NOW
                    </button>
                  </div>

                  <!-- LOCATION -->
                  <div class=" mt-2">
                    <h3 class="font-bold">
                      Locations
                    </h3>
                    <div class="">
                      <div class="flex ">
                        <img src="https://images.unsplash.com/photo-1519331379826-f10be5486c6f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="object-cover w-16 rounded border border-emerald-900 shadow-md">
                        <div class=" text-sm p-1">
                          <p class="text-lg text-emerald-500">
                            {{ tournament.location }}
                          </p>
                          <div class="flex  space-x-3">
                            <p>{{ tournament.location }}</p>
                            <p class="text-xs text-orange-400">
                              Get Directions
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- !LOCATION -->

                  <hr class="my-3">
                  <div class="">
                    <h3 class="font-bold">
                      Schedule
                    </h3>
                    <p>Schedule has not been posted yet.</p>
                  </div>
                  <hr class="my-3">
                  <div class="">
                    <h3 class="font-bold">
                      Player Divisions & Entry Fees
                    </h3>
                    <div class="">
                      <div class="flex space-x-4 p-1">
                        <p>$15.00</p>
                        <p>GEN</p>
                        <p>General</p>
                      </div>
                      <div class="flex space-x-4 p-1">
                        <p>$15.00</p>
                        <p>FPO</p>
                        <p>Women's Pro Open</p>
                      </div>
                    </div>
                  </div>
                  <hr class="my-3">
                </div>
                <!-- !LEFT COLUMN -->

                <!-- RIGHT COLUMN -->
                <div class="lg:w-2/4  lg:pl-4">
                  <img src="https://images.unsplash.com/photo-1519331379826-f10be5486c6f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="shadow-md object-cover border border-emerald-900 rounded">
                  <div class=" mt-3 p-2 lg:p-0">
                    <div class=" my-3">
                      <h3 class="font-bold">
                        Staff
                      </h3>
                      <a href="/" class="text-green-700">Contact Tournament Staff</a>
                    </div>
                    <div class="">
                      <div class="flex items-center ">
                        <img src="https://i.pravatar.cc/150?img=3" alt="event director portrait" class="w-12 h-12 object-cover shadow-md border border-emerald-900 rounded">
                        <div class="p-1">
                          <h3 class="font-bold">
                            Event Director
                          </h3>
                          <a href="/" class="text-green-700">{{ tournament.host }}  </a>
                        </div>
                      </div>

                      <hr class="my-3">

                      <div class="">
                        <h3 class="font-bold mb-1">
                          About This Tournament
                        </h3>
                        <div class=" py-2 text-sm">
                          <strong class="my-2">     New Improved Bag Tags For 2024</strong> <br>

                          All DCDG Bag tags for 2024 will have numbers this year as always. Having a DCDG bag tag will not only make you eligible for full ace pots but also allow you to play monthly bag tag events. All members will also get invited to our players party like the one we had this year. Playing in DCDG events will also earn you points based off your finish at each event and the top 20 members in points will receive a special numbered bag tag.

                          <br> <strong class="my-2">  Women's DCDG Bag Tags</strong>  <br>

                          Please sign up under FPO if you want a women's tag.

                          Our women players will have their own bag tags again this year since they have fewer players at this time.

                          <br> <strong class="my-2"> Membership Shirts</strong>  <br>

                          Deadline For Shirt Memberships Is January 5th, 2024.

                          Shirts will be dark grey with a black DCDG logo.
                          <br><strong class="my-2">Refund policy</strong>  <br>
                          There are no refunds for club membership.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- !RIGHT COLUMN -->
              </div>
              </div>




              <div v-else-if="item.key === 'pictures'" class="space-y-3">
                <div class=" w-full bg-gray-100 px-5 py-1 ">
                  <p>Tournament pictures » 0 staff pictures</p>
                </div>

                <div class=" flex flex-col items-center justify-center">
                  <Icon name="material-symbols-light:no-photography-outline-sharp" class="text-9xl "/>
                  <p class="text-5xl font-bold">No pictures have been added.</p>
                </div>
              </div>

         
            </UContainer>
        </template>
      </UTabs>
        
        <!-- !TABS -->

        

      
      </div>
        <!-- !RIGHT COLUMN -->
    </div>
  </main>
</template>

<style>

</style>
