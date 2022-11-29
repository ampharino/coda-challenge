<script setup lang="ts">
import { RouterView } from "vue-router";
import FooterComponent from "./components/FooterComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
</script>

<template>
  <HeaderComponent />
  <div class="content">
    <RouterView />
  </div>
  <FooterComponent />
</template>

<style scoped>
.content {
  flex: 1;
}
</style>
