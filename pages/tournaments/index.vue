<script lang="ts" setup>
import { ref } from 'vue'
import LeftColumn from '../../components/tournaments/LeftColumn.vue'
import Tournaments from '../../data/Tournaments.json'
import TournamentCard from '../../components/tournaments/TournamentCard.vue'

const tournaments = ref(Tournaments)
</script>

<template>
  <main class="min-h-screen">
    <div class="   flex p-10 space-x-5">
      <div class=" w-1/6  items-end justify-start flex flex-col p-5  border-r-gray-300 border-r">
        <LeftColumn />
      </div>
      <div class="w-3/4 ">
        <div class=" my-3">
          <h1 class="text-4xl">
            Upcoming disc golf tournaments in the United States
          </h1>
        </div>
        <TournamentCard v-for="tournament in tournaments" :title="tournament.title" :host="tournament.host" :date="tournament.date" :location="tournament.location" :registrants="tournament.registrants" :registration-open="tournament.registrationOpen" />
      </div>
    </div>
  </main>
</template>

<style>

</style>
