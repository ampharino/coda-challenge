<script setup lang="ts">
import SearchResult from "./SearchResult.vue";
import NoResult from "./NoResult.vue";
import { ref, watch } from "vue";
import type { Product } from "@/types";
import { api } from "@/api";
import { useRoute } from "vue-router";

const search = ref<string>("");
const searchResult = ref<Product[]>([]);
const route = useRoute();
const filteredProducts = async () => {
  if (!search.value) {
    return [];
  }
  const products = await api.getProducts();
  return products.filter((product) =>
    product.name.toLowerCase().includes(search.value.toLowerCase())
  );
};

watch(search, async () => {
  searchResult.value = await filteredProducts();
});

const clearSearch = (e?: FocusEvent) => {
  if (!e?.relatedTarget) {
    search.value = "";
  }
};

watch(
  () => route.params.id,
  () => clearSearch()
);
</script>

<template>
  <div class="search-container">
    <label for="searchbar">Search for product:</label>
    <input
      type="text"
      id="searchbar"
      v-model="search"
      @blur.capture="clearSearch"
    />
    <div v-if="search" class="result-container">
      <div v-if="searchResult.length">
        <SearchResult
          v-for="product in searchResult"
          :product="product"
          :key="product.id"
        />
      </div>
      <NoResult v-else />
    </div>
  </div>
</template>

<style scoped>
#searchbar {
  width: 240px;
}
.search-container {
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 12px;
}

.result-container {
  position: absolute;
  top: 100%;
  width: 240px;
  border-width: 1px;
  border-style: solid;
  border-color: var(--border-color);
  background-color: var(--color-primary);
}
</style>
