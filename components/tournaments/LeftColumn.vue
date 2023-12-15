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
  <div >
    <button class="p-2 rounded border-2 border-emerald-900/50 bg-green-500 font-bold text-white shadow-md mb-5 relative items-center flex space-x-2">
     
          <Icon name="material-symbols:add-circle" class="text-4xl " />
        
      <span>
       Add A New <br> Tournament
     </span>
     
    </button>
    <div class="">
      <h3>Canada</h3>
      <p v-for="c in canadaProvinces" :key="c">
        {{ c }}
      </p>
    </div>
    <div class=" my-5">
      <h3>International</h3>
      <p v-for="i in internationalCountries" :key="i">
        {{ i }}
      </p>
    </div>
    <div class="">
      <h3>United States</h3>
      <p v-for="u in unitedStatesLocations" :key="u">
        {{ u }}
      </p>
    </div>
  </div>
</template>

<style  scoped>
h3{
  @apply font-bold
}

p{
  @apply text-xs text-green-600 py-0.5
}
</style>
