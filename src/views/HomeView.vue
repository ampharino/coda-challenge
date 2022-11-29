<script setup lang="ts">
import { onMounted, ref } from "vue";
import { api } from "@/api";
import type { Product } from "@/types";

const productList = ref<Product[]>([]);

onMounted(() => {
  const fetchProductsFromApi = async () => {
    const products = await api.getProducts();
    productList.value = products;
  };
  fetchProductsFromApi();
});

const setFallbackImg = (event: Event) => {
  const eventTarget = event.target as HTMLImageElement;
  eventTarget.className = "error-image";
  eventTarget.src = "fallback.svg";
};
</script>

<template>
  <main>
    <div class="list">
      <div class="list-item" v-for="product in productList" :key="product.id">
        <div class="image-container">
          <img :src="product.logoLocation" @error="setFallbackImg" />
        </div>
        <div>
          {{ product.name }}
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  margin: 0 auto;
  max-width: 60vw;
}
.list {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}

.list-item {
  margin: 16px;
  border: solid;
  max-width: 700px;
}

.image-container {
  max-height: 240px;
  max-width: 640px;
}

img {
  object-fit: cover;
  max-width: 100%;
  max-height: 100%;
}
.error-image {
  height: 240px;
  width: 640px;
}
</style>
