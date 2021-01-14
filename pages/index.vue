<template>
  <div class="bg-gray-200 dark:bg-dark-dark min-h-screen">
    <Navbar />
    <div class="container max-w-screen-xl m-auto">
      <div class="filter-container flex py-12 px-4">
        <input
          class="pr-10 pl-5 py-2 dark:bg-dark-light dark:text-gray-100"
          type="text"
          v-model="search"
          placeholder="Search Here"
        />
        <select
          class="ml-auto px-10 pl-2 dark:bg-dark-light dark:text-gray-100"
          name="region"
          id="region"
          v-model="selected"
          @change="selectedRegion"
        >
          <option value="">All</option>
          <option
            :value="region.toLowerCase()"
            v-for="region in regionList"
            :key="region"
          >
            {{ region }}
          </option>
        </select>
      </div>
      <transition name="fade" mode="out-in">
        <div
          class="grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-16 px-4"
          v-if="countryByRegion.length == 0"
          key="all"
        >
          <Country
            v-lazy-load
            :country="country"
            v-for="(country, index) in displayedCountries"
            :key="country + index"
          />
        </div>
        <div
          class="grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-16 px-4"
          v-else
          key="region"
        >
          <Country
            v-lazy-load
            :country="country"
            v-for="(country, index) in displayedCountriesRegion"
            :key="country + index"
          />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allCountry: [],
      countryByRegion: [],
      regionList: [],
      search: "",
      selected: "",
    };
  },
  mounted() {
    this.allCountry = this.$store.state.country.allCountryList;
    this.allCountry.filter((country) => {
      if (this.regionList.indexOf(country.region) === -1 && country.region) {
        this.regionList.push(country.region);
      }
    });
  },
  methods: {
    async selectedRegion() {
      if (!this.selected) return (this.countryByRegion = []);
      await this.$store.dispatch("country/getRegion", this.selected);
      this.countryByRegion = this.$store.state.country.regionCountryList;
    },
  },
  computed: {
    displayedCountries: function () {
      return this.allCountry.filter(
        (country) =>
          country.name.toLowerCase().match(this.search.toLowerCase()) ||
          country.alpha3Code.toLowerCase().match(this.search.toLowerCase()) ||
          country.alpha2Code.toLowerCase().match(this.search.toLowerCase())
      );
    },
    displayedCountriesRegion: function () {
      return this.countryByRegion.filter(
        (country) =>
          country.name.toLowerCase().match(this.search.toLowerCase()) ||
          country.alpha3Code.toLowerCase().match(this.search.toLowerCase()) ||
          country.alpha2Code.toLowerCase().match(this.search.toLowerCase())
      );
    },
  },
};
</script>

<style lang="scss">
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
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
  transform: translateY(30px);
}
</style>
