<script lang="ts" setup>
const canadaProvinces = [
  'Alberta',
  'British Columbia',
  'Manitoba',
  'New Brunswick',
  'Newfoundland',
  'Nova Scotia',
  'Ontario',
  'Prince Edward Island',
  'Quebec',
  'Saskatchewan',
  'Yukon Territory',
]

const internationalCountries = [
  'Austria',
  'Australia',
  'Belgium',
  'Belize',
  'Brazil',
  'Cambodia',
  'China',
  // ... (add the rest of the international countries)
]

const unitedStatesLocations = [
  'AA Armed Forces',
  'AE Armed Forces',
  'Alabama',
  'Alaska',
  'AP Armed Forces',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'District of Columbia',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  // ... (add the rest of the U.S. locations)
]
</script>

<template>
  <div>
    <div class="p-2 rounded border border-emerald-900 bg-green-500 font-bold text-white shadow-md mb-5">
      Add A New <br> Tournament
    </div>
    <div class="">
      <h3>Canada</h3>
      <p v-for="c in canadaProvinces">
        {{ c }}
      </p>
    </div>
    <div class=" my-5">
      <h3>International</h3>
      <p v-for="i in internationalCountries">
        {{ i }}
      </p>
    </div>
    <div class="">
      <h3>United States</h3>
      <p v-for="u in unitedStatesLocations">
        {{ u }}
      </p>
    </div>
  </div>
</template>

<style scoped>
h3{
  @apply font-bold
}

p{
  @apply text-xs text-green-600 py-0.5
}
</style>
