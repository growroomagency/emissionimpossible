<template>
    <div class="max-w-min">
        <div class="element-cards-container">
            <slot />
        </div>

        <slot name="footer" />
    </div>
</template>

<style scoped>
.element-cards-container {
    @apply flex flex-col md:flex-row justify-evenly items-center gap-12 my-8;
}
</style>