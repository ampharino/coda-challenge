<script setup lang="ts">
import type { Product } from "@/types";
import { RouterLink } from "vue-router";
import ProductImage from "./ProductImage.vue";

defineProps<{ product: Product }>();
</script>

<template>
  <div class="container">
    <RouterLink :to="`/products/${product.id}`">
      <ProductImage :url="product.logoLocation" />
      <div class="name">
        {{ product.name }}
      </div>
    </RouterLink>
  </div>
</template>

<style scoped>
.container {
  margin: 16px;
  border: solid;
  max-width: 700px;
}

.name {
  background-color: var(--color-dark-matter-5);
  padding: 12px;
}

a {
  text-decoration: none;
  color: var(--color-primary);
}
</style>
