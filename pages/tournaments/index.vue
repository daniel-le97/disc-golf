<template>
  <main class="min-h-screen">
     <div class="   flex p-10 space-x-2">
      <div class=" w-1/6  items-end justify-start flex flex-col p-5  border-r-gray-300 border-r">
        <div class="" v-for="i in 24">

          <a href="">
            {{ i }}
          </a>
        </div>
      </div>
      <div class="w-3/4 ">
<div class=" my-3">
  <h1 class="text-4xl">Upcoming disc golf tournaments in the United States</h1>
</div>
        <TournamentCard v-for="tournament in tournaments"   :title="tournament.title" :host="tournament.host" :date="tournament.date" :location="tournament.location"  :registrants="tournament.registrants" :registrationOpen="tournament.registrationOpen" />
      </div>
     </div>
  </main>
</template>

<script lang="ts" setup>
import {ref} from 'vue'

import Tournaments from '../../data/Tournaments.json'
import TournamentCard from '../../components/tournaments/TournamentCard.vue';
const tournaments = ref(Tournaments)
</script>

<style>

</style>