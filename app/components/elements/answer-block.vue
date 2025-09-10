<template>
    <div class="answer-block" :class="{'is-visible': isVisible }">
        <div class="font-extrabold text-2xl md:mb-3">{{ company.ecoscore }}%</div>
        <div class="font-bold">{{ company.emissions }}g CO<sub>2</sub></div>
        <div class="text-sm">per page load</div>
        <div v-if="isCorrectChoise != null">
            <IconsCorrect v-if="isCorrectChoise === true" class="size-8 text-sig-green" />
            <IconsIncorrect v-else class="size-8 text-red-500" />
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    company: Company,
    isCorrectChoise?: boolean,
    isVisible: boolean,
}>()
</script>

<style scoped>
.answer-block {
    @apply flex flex-col flex-nowrap justify-center items-center gap-1;
    @apply rounded-xl w-4/5 overflow-hidden;
    
    @apply h-0 py-0 mb-0 opacity-0 transition-all duration-300;
}

.answer-block.is-visible {
    @apply h-max py-2 mb-6 opacity-100;
}
</style>