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
</script>

<template>
  <main>
    <div class="list">
      <div class="list-item" v-for="product in productList" :key="product.id">
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
  flex-direction: row;
}

.list-item {
  margin: 16px;
  border: solid;
}
</style>
