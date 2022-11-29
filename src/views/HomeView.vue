<script setup lang="ts">
import { onMounted } from "vue";
import { api } from "@/api";

onMounted(() => {
  const fetchProductsFromApi = async () => {
    const products = await api.getProducts();
    console.log({ products });
  };
  fetchProductsFromApi();
});
</script>

<template>
  <main>Hello World</main>
</template>
