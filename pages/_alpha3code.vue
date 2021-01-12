<template>
  <div class="individual-country">
    <nuxt-link to="/">Back</nuxt-link>
    <div class="flex">
      <img class="flag" :src="country.flag" />
      <div class="text-container">
        <div class="name font-bold text-xl">{{ country.name }}</div>
        <div class="flex">
          <div class="flex flex-col">
            <div class="native-name">
              <span class="font-medium">Native Name: </span>{{ country.name }}
            </div>
            <div class="Population">
              <span class="font-medium">Population: </span
              >{{ country.population }}
            </div>
            <div class="Region">
              <span class="font-medium">Region: </span>{{ country.region }}
            </div>
            <div class="Sub-Region">
              <span class="font-medium">Sub Region: </span
              >{{ country.subRegion }}
            </div>
            <div class="Capital">
              <span class="font-medium">Capital: </span>{{ country.capital }}
            </div>
          </div>
          <div class="flex flex-col">
            <div class="Top Level Domain">
              <span class="font-medium">Top Level Domain: </span
              >{{ country.topLevelDomain[0] }}
            </div>
            <div class="currencies">
              <span class="font-medium">currencies: </span
              >{{ country.currencies[0].name }}
            </div>
            <div class="languages">
              <span class="font-medium">languages: </span
              ><template v-for="(lang, index) in country.languages"
                >{{ lang.name
                }}<span
                  v-if="index != country.languages.length - 1"
                  :key="index"
                  >,
                </span>
              </template>
            </div>
          </div>
        </div>
        <div class="flex">
          <span class="font-medium py-1">Border Countries: </span>
          <p
            class="ml-2 px-3 py-1 border rounded-md shadow-sm"
            v-for="item in border"
            :key="item"
          >
            {{ item }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      border: [],
    };
  },
  async mounted() {
    for (const border in this.country.borders) {
      const ip = await this.$axios.$get(
        `https://restcountries.eu/rest/v2/alpha/${this.country.borders[border]}`
      );
      this.border.push(ip.name);
    }
  },
  async asyncData({ route, $axios }) {
    const country = await $axios.$get(
      `https://restcountries.eu/rest/v2/alpha${route.path}`
    );
    return { country };
  },
};
</script>