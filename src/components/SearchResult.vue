<script setup lang="ts">
import type { Product } from "@/types";
import { RouterLink } from "vue-router";
defineProps<{ product: Product }>();
</script>

<template>
  <div>
    <RouterLink :to="`/products/${product.id}`">
      {{ product.name }}
    </RouterLink>
  </div>
</template>

<style scoped>
div {
  padding: 8px;
}

a {
  text-decoration: none;
  color: var(--color-dark-matter-main);
}

div:hover {
  background-color: var(--color-portal-4);
  color: var(--color-primary);
}

div:hover > a {
  color: var(--color-primary);
}
</style>
