<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/"
          ><img
            src="https://cdn1.codashop.com/S/content/mobile/images/codashop-logo-new-2x.png"
        /></RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: var(--color-primary);
}
nav {
  padding: 12px;
  max-width: 200px;
}

img {
  object-fit: cover;
  max-height: 100%;
  max-width: 100%;
}
</style>
