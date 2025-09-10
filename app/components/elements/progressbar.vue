<template>
    <div class="element-progressbar">
        <div class="progress" />
    </div>
</template>

<script setup lang="ts">
defineProps<{
    value: number;
    total: number;
}>();
</script>

<style scoped>
.element-progressbar {
    --progress-height: 10px;
    --progress-tick-width: min(15vw, 96px);

    @apply bg-[#d9d9d9] rounded-full min-h-[var(--progress-height)];
    @apply relative;

    width: calc(v-bind(total) * var(--progress-tick-width));
}

.element-progressbar .progress {
    @apply bg-sig-accent rounded-full transition-[width] duration-200;
    @apply absolute top-0 left-0 min-h-[var(--progress-height)];

    width: calc(v-bind(value + 1) * var(--progress-tick-width));
}
</style>