<template>
    <div class="relative">
        <svg
            :view-box="`0 0 ${s} ${s}`"
            :width="s"
            :height="s"
            transform="rotate(-90)"
        >
            <circle
                :cx="cx"
                :cy="cy"
                :r="r"
                fill="none"
                stroke-width="14"
                stroke="var(--sig-placeholder)"
            />
            <circle
                :cx="cx"
                :cy="cy"
                :r="r"
                stroke="var(--sig-accent)"
                stroke-width="15"
                fill="none"
                stroke-linecap="round"
                :stroke-dasharray="`${(value / total) * c} ${c}`"
            />
        </svg>
        <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-3xl font-bold">
                {{ value }} / {{ total }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    value: number;
    total: number;
}>();

const s = ref(200);
const cx = ref(100);
const cy = ref(100);
const r = ref(80);
const c = computed(() => 2 * Math.PI * r.value);
</script>