<template>
  <router-link
    ref="individual"
    :to="`${country.alpha3Code.toLowerCase()}`"
    class="individual-country bg-white shadow-lg group hover:shadow-2xl transition duration-300 dark:bg-dark-light dark:text-gray-100"
  >
    <div class="h-40 overflow-hidden">
      <img
        class="object-cover h-full w-full ease-out duration-300 transition-transform transform scale-100 group-hover:scale-110"
        :src="country.flag"
        :alt="country.name"
      />
    </div>
    <div class="p-6">
      <p class="text-xl">
        {{ country.name }}
      </p>
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
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["country"],
};
</script>