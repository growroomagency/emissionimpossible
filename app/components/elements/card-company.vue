<template>
    <div tabindex="0" role="button" class="element-card-base element-card-company" :class="{'is-locked': isShowingAnswers, 'is-selected': isSelected}">
        <div>
            <ElementsBrandLogo :company="company" />
        </div>
        <div class="text-xl font-bold">{{ company.name }}</div>
        <ElementsAnswerBlock
            class="bg-sig-whiteish"
            :company="company"
            :is-visible="isShowingAnswers===true"
            :is-correct-choise="isCorrectChoise"
        />
    </div>
</template>

<script setup lang="ts">
defineProps<{
    company: Company,
    isSelected: boolean,
    isCorrectChoise: boolean,
    isShowingAnswers: boolean,
}>()
</script>

<style scoped>
.element-card-company {
    @apply hover:scale-105;
}

.element-card-company.is-locked {
    @apply cursor-not-allowed;
}

.element-card-company.is-selected {
    @apply border-4 border-sig-accent;
}


.element-card-company .answer-block {
    @apply flex flex-col flex-nowrap justify-center items-center gap-1;
    @apply bg-sig-whiteish rounded-xl w-4/5 overflow-hidden;
    
    @apply h-0 py-0 mb-0 opacity-0 transition-all duration-300;
}

.element-card-company .answer-block.is-visible {
    @apply h-max py-2 mb-6 opacity-100;
}
</style>