<template>
    <img
        v-if="company.logo.type == 'svg'"
        :key="`${company.name}-svg-logo`"
        class="size-32"
        :src="`/assets/companies/${company.logo.src}.svg`"
        :alt="company.web"
    >
    <img
        v-else
        :key="`${company.name}-png-logo`"
        class="size-32"
        :src="`/assets/companies/big/${company.logo.src}.png`"
        :srcset="`/assets/companies/small/${company.logo.src}.png 640w, /assets/companies/big/${company.logo.src}.png 1024w`"
        :alt="company.web"
    >
</template>

<script setup lang="ts">
defineProps<{
    company: Company,
}>()
</script>