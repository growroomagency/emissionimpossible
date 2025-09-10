<template>
  <div class="app-container">
    <transition name="fade" mode="out-in" :appear="true">
      <welcome-screen v-if="state == 'welcome'" key="welcome" />
      <final-screen v-else-if="state == 'final'" key="finall" />
      <score-screen v-else-if="state == 'score'" key="score" />
      <question-screen v-else key="questions" />
    </transition>
  </div>
</template>

<script setup lang="ts">
const { state, reset } = useAppState();

useSeoMeta({
  description: 'GrowRoom are a digital marking agency based in Shrewsbury, UK. We drive sustainable online growth for responsible brands. Get in touch today.',

  ogUrl: 'https://growroom.agency',
  ogLocale: 'en_GB',
  ogTitle: `Sustainable Digital Marketing Agency | GrowRoom`,
  ogDescription: `GrowRoom are a digital marking agency based in Shrewsbury, UK. We drive sustainable online growth for responsible brands. Get in touch today.`,
  ogSiteName: 'GrowRoom',

  twitterCard: 'summary_large_image',
  twitterImage: '',
  twitterTitle: `Sustainable Digital Marketing Agency | GrowRoom`,
  twitterDescription: `GrowRoom are a digital marking agency based in Shrewsbury, UK. We drive sustainable online growth for responsible brands. Get in touch today.`
});

onMounted(() => {
    reset();
});
</script>

<style scoped>
.app-container {
  @apply w-screen h-screen overflow-visible;
  @apply bg-sig-whiteish;
}
</style>