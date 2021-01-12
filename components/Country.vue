<template>
  <router-link
    :to="`${country.alpha3Code.toLowerCase()}`"
    class="individual-country"
  >
    <div class="flag w-full h-52">
      <nuxt-image width="300" height="169" :src="country.flag" />
    </div>
    <div class="text-xl">{{ country.name }}</div>
    <p><span class="font-medium">Population</span>{{ country.population }}</p>
    <p><span class="font-medium">Region</span>{{ country.region }}</p>
    <p><span class="font-medium">Capital</span>{{ country.capital }}</p>
  </router-link>
</template>

<script>
export default {
  props: ["country"],
};
</script>
