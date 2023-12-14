<script lang="ts" setup>
import { ref } from 'vue'
import Tournaments from '../../data/Tournaments.json'

const tournaments = ref(Tournaments)
const route = useRoute()

const tournament = tournaments.value.find(t => t.title === route.params.title)
</script>

<template>
  <main v-if="tournament" class="min-h-screen px-20">
    <div class="flex p-10 space-x-5">
      <div class="w-1/6 space-y-5  sticky h-full top-12">
        <div class=" border-black/30 border-2 text-2xl  py-2 bg-orange-500 text-white font-bold drop-shadow  shadow-inset flex justify-center rounded">
          Tournament
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
      <div class=" w-5/6">
        <h1 class="text-4xl font-bold ">
          {{ tournament.title }}
        </h1>
        <div class="my-2">
          {{ tournament.date }} at {{ tournament.location }}
        </div>

        <!-- TABS -->
        <div class="flex space-x-1 border-b-4 border-b-emerald-700 ">
          <button class="px-4 p-1 bg-emerald-700 text-white  rounded-t">
            About
          </button>
          <button class="px-4 p-1 bg-gray-300 text-emerald-600 rounded-t">
            Register
          </button>
          <button class="px-4 p-1 bg-gray-300 text-emerald-600 rounded-t">
            Registered Players
          </button>
          <button class="px-4 p-1 bg-gray-300 text-gray-700 rounded-t">
            Pictures
          </button>
          <button class="px-4 p-1 bg-gray-300 text-gray-700 rounded-t">
            Videos
          </button>
          <button class="px-4 p-1 bg-gray-300 text-emerald-600 rounded-t">
            Comments
          </button>
        </div>
        <!-- !TABS -->

        <div class=" flex p-5 pl-0 bg-lime-300/20 border border-emerald-900/20">
          <!-- LEFT COLUMN -->
          <div class="lg:w-3/5 p-2 bg-white border rounded rounded-l-none border-l-0 border-emerald-900/20">
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
          <div class="lg:w-2/4  pl-2">
            <img src="https://images.unsplash.com/photo-1519331379826-f10be5486c6f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="shadow-md object-cover border border-emerald-900 rounded">
            <div class=" mt-3">
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
    </div>
  </main>
</template>

<style>

</style>
