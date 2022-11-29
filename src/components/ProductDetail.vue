<script setup lang="ts">
import type { ProductDetail } from "@/types";
import ProductImage from "./ProductImage.vue";

defineProps<{ details: ProductDetail }>();
</script>

<template>
  <div class="container">
    <div class="summary-container">
      <ProductImage :url="details.logoLocation" />
      <div v-html="details.shortDescription" />
    </div>
    <div class="description-container">
      <h2 v-html="details.productTagLine" />
      <div v-html="details.longDescription" />
    </div>
  </div>
</template>

<style scoped>
.container {
  color: var(--color-primary);
  display: flex;
  flex-direction: column;
}

:deep(.shop-content--paragraph) {
  margin: 15px 0;
  line-height: 22px;
  position: relative;
  overflow: hidden;
}

.summary-container {
  max-width: 60vw;
  margin: 0 auto;
}

.description-container {
  background-color: var(--color-primary);
  color: var(--color-dark-matter-main);
  text-align: center;
  width: 100%;
}
</style>
