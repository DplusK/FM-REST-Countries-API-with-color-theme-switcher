<template>
  <div
    class="w-100 px-4 lg:px-32 py-4 flex bg-white shadow-sm dark:bg-dark-light dark:text-gray-100"
  >
    <h1 class="text-xl font-bold">Where in the world?</h1>
    <button @click="mode" class="ml-auto toggle-mode">
      {{ toggle }}
    </button>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$colorMode.value = localStorage.getItem("nuxt-color-mode");
    this.$colorMode.preference = localStorage.getItem("nuxt-color-mode");
  },
  methods: {
    mode: function () {
      console.log("here");
      if (this.$colorMode.value == "light") {
        this.$colorMode.value = "dark";
        localStorage.setItem("nuxt-color-mode", "dark");
      } else {
        this.$colorMode.value = "light";
        localStorage.setItem("nuxt-color-mode", "light");
      }
    },
  },
  computed: {
    toggle() {
      if (this.$colorMode.value == "light") return "Dark Mode";
      else return "Light Mode";
    },
  },
};
</script>