<template>
    <button class="element-button" type="button">
        <slot />
    </button>
</template>

<style scoped>
.element-button {
    @apply min-h-14 px-12 bg-sig-accent rounded-lg;
    @apply text-sig-green font-bold text-lg;
    @apply transition-transform duration-300 hover:scale-105;
}
</style>