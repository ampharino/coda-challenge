<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { api } from "@/api";
import ProductDetail from "@/components/ProductDetail.vue";

const route = useRoute();
const productDetail = ref();

onMounted(() => {
  const fetchProductDetailFromApi = async (id: number) => {
    const data = await api.getProductDetail(id);
    productDetail.value = data;
  };
  fetchProductDetailFromApi(Number(route.params.id));
});
</script>

<template>
  <h1 v-if="!productDetail">Loading ...</h1>
  <ProductDetail v-else :details="productDetail" />
</template>

<style scoped></style>
