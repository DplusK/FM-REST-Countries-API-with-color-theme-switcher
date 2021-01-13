<template>
  <router-link
    :to="`${country.alpha3Code.toLowerCase()}`"
    class="individual-country"
  >
    <div class="h-40">
      <img class="object-cover h-full w-full" :src="country.flag" />
    </div>
    <p class="text-xl">{{ country.name }}</p>
    <div class="flex">
      <p class="font-medium mr-1">Population:</p>
      {{ country.population }}
    </div>
    <div class="flex">
      <p class="font-medium mr-1">Region:</p>
      {{ country.region }}
    </div>
    <div class="flex">
      <p class="font-medium mr-1">Capital:</p>
      {{ country.capital }}
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["country"],
};
</script>

<style>
</style>
