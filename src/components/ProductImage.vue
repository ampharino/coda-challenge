<script setup lang="ts">
defineProps<{
  url: string;
}>();
const setFallbackImg = (event: Event) => {
  const eventTarget = event.target as HTMLImageElement;
  eventTarget.className = "error-image";
  eventTarget.src = "fallback.svg";
};
</script>

<template>
  <div>
    <img :src="url" @error="setFallbackImg" />
  </div>
</template>

<style scoped>
div {
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
