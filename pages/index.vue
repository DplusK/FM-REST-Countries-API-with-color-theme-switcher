<template>
  <div id="app">
    <div class="grid grid-cols-4 gap-4 max-w-screen-lg m-auto">
      <div v-for="(country, index) in displayList" :key="country + index">
        <Country :country="country" :class="country.name" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ route, $axios }) {
    const displayList = await $axios.$get(
      "https://restcountries.eu/rest/v2/all"
    );
    return { displayList };
  },
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
