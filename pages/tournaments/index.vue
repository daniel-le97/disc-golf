<script lang="ts" setup>
import { ref } from 'vue'
import LeftColumn from '../../components/tournaments/LeftColumn.vue'
import Tournaments from '../../data/Tournaments.json'
import TournamentCard from '../../components/tournaments/TournamentCard.vue'

const tournaments = ref(Tournaments)
</script>

<template>
  <main class="min-h-screen bg-white ">
    <div class="   flex lg:flex-row flex-col  lg:p-10 lg:space-x-5 p-2">
      <div class=" lg:w-1/6  items-start lg:items-end justify-start flex flex-col p-5  border-r-gray-300 lg:border-r   order-2 lg:order-1 ">
        <LeftColumn />
      </div>
      <div class="lg:w-5/6 order-1 lg:order-2  ">
        <div class=" my-3">
          <h1 class="text-3xl lg:text-7xl text-zinc-900 font-extrabold">
            Upcoming disc golf tournaments in the United States
          </h1>
        </div>

        <div class="" v-if="tournaments">
    <TournamentCard  v-for="tournament in tournaments" v-if="tournaments.length >= 0" :title="tournament.title" :host="tournament.host" :date="tournament.date" :location="tournament.location" :registrants="tournament.registrants" :registration-open="tournament.registrationOpen" />
        </div>
    

      </div>
    </div>
  </main>
</template>

<style>

</style>
