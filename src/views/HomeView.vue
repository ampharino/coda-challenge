<script setup lang="ts">
import { onMounted, ref } from "vue";
import { api } from "@/api";
import type { Product } from "@/types";
import ProductCard from "@/components/ProductCard.vue";

const productList = ref<Product[]>([]);

onMounted(() => {
  const fetchProductsFromApi = async () => {
    const products = await api.getProducts();
    productList.value = products;
  };
  fetchProductsFromApi();
});
</script>

<template>
  <main>
    <div class="list">
      <ProductCard
        v-for="product in productList"
        :key="product.id"
        :product="product"
      />
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
</style>
