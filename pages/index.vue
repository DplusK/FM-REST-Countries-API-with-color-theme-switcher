<template>
  <div id="app">
    <div class="grid grid-cols-4 gap-4 max-w-screen-lg m-auto">
      <Country
        v-lazy-load
        :country="country"
        :class="country.name"
        v-for="(country, index) in displayList"
        :key="country + index"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      displayList: [],
    };
  },
  async mounted() {
    const ip = await this.$axios.$get("https://restcountries.eu/rest/v2/all");
    this.displayList = ip;
  },
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.lazyLoad {
  opacity: 0;
  transition: opacity 1s;
}
.isLoaded {
  opacity: 1;
}
</style>
