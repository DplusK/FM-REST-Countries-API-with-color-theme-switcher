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
          title="search-bar"
        />
        <select
          class="ml-auto px-10 pl-2 dark:bg-dark-light dark:text-gray-100"
          name="region"
          id="region"
          v-model="selected"
          @change="selectedRegion"
        >
          <option value="" title="all">All</option>
          <option
            :value="region.toLowerCase()"
            v-for="region in regionList"
            :key="region"
          >
            {{ region }}
          </option>
        </select>
      </div>
      <div
        class="grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-16 px-4"
        key="all"
      >
        <Country
          :country="country"
          v-for="(country, index) in displayedCountries.splice(0, 8)"
          :key="country + index"
          class="box"
        />
        <Country
          :country="country"
          v-for="(country, index) in displayedCountries.splice(8)"
          :key="country + index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  data() {
    return {
      allCountry: [],
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
    setItemRef(el) {
      if (el) {
        this.itemRefs.push(el);
      }
    },
    async selectedRegion() {
      if (!this.selected)
        return (this.allCountry = this.$store.state.country.allCountryList);
      await this.$store.dispatch("country/getRegion", this.selected);
      this.allCountry = this.$store.state.country.regionCountryList;
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
  },
  beforeUpdate() {
    this.itemRefs = [];
  },
  watch: {
    displayedCountries: () => {
      gsap.fromTo(
        ".box",
        {
          opacity: 0,
          ease: "Power2",
          scale: 1.1,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: {
            each: 0.2,
          },
        }
      );
    },
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
