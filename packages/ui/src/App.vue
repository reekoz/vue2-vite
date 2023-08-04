<script setup>
import TheWelcome from "./components/TheWelcome.vue";
</script>

<template>
  <v-app>
    <v-app-bar dark app color="secondary">
      <v-toolbar-title>Vue 2 + Vite</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <TheWelcome />
    </v-main>
  </v-app>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
