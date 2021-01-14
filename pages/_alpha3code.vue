<template>
  <div>
    <Navbar />
    <div class="individual-country max-w-screen-xl m-auto flex flex-col">
      <nuxt-link class="px-4 py-2 my-8 w-min rounded-md shadow-md" to="/"
        >Back</nuxt-link
      >
      <div class="flex">
        <div class="mr-24 max-w-md flex justify-center">
          <img class="object-contain" :src="country.flag" />
        </div>
        <div class="text-container flex justify-center content-center flex-col">
          <div class="name font-bold text-4xl mb-4">{{ country.name }}</div>
          <div class="flex">
            <div class="flex flex-col info mr-5">
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
            <div class="flex flex-col info">
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
          <div class="flex flex-wrap mt-10 text-lg;">
            <span class="font-medium py-1 mr-2">Border Countries: </span>
            <nuxt-link
              :to="country.borders[index].toLowerCase()"
              class="mr-3 px-3 py-1 border rounded-md shadow-sm mb-2"
              v-for="(item, index) in border"
              :key="item"
            >
              {{ item }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  transition: "intro",
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

<style lang="scss">
#__nuxt,
#__layout {
  @apply bg-white;
}
.info {
  * {
    @apply text-lg;
    &:not(:last-child) {
      @apply mb-2;
    }
  }
}
$t-duration: 800ms;
$t-delay: 300ms;

.intro-enter-active,
.intro-leave-active {
  transition-duration: $t-duration * 2;

  &::before,
  &::after {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    display: block;
    width: 100%;
    height: 50%;
    transition-property: opacity, transform;
    transition-timing-function: ease-in-out;
  }

  &::before {
    background-color: #2e2e2e;
  }

  &::after {
    top: 50%;
    background-color: #2e2e2e;
  }
}

.intro-leave {
  &::before,
  &::after {
    transform: scaleX(0);
  }
}

.intro-leave-active {
  &::before {
    transition-duration: $t-duration;
  }

  &::after {
    transition-duration: $t-duration - $t-delay;
    transition-delay: $t-delay;
  }
}

.intro-leave-to {
  &::before,
  &::after {
    transform: scale(1);
    transform-origin: left;
  }
}

.intro-enter {
  &::before,
  &::after {
    transform: scaleX(1);
  }
}

.intro-enter-active {
  &::before {
    transition-duration: $t-duration;
  }

  &::after {
    transition-duration: $t-duration - $t-delay;
    transition-delay: $t-delay;
  }
}

.intro-enter-to {
  &::before,
  &::after {
    transform: scaleX(0);
    transform-origin: right;
  }
}
</style>
