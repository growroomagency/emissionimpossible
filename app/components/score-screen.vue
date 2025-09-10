<template>
    <div class="score-screen">
        <div class="text-3xl">
            {{ results.emoji }}
        </div>
        <div class="text-3xl font-extrabold">
            Your score
        </div>
        <div>
            <ElementsProgresscircle
                :value="getScore"
                :total="totalQuestions"
            />
        </div>
        <div>
            {{ results.message }}
        </div>
        <ElementsButton @click="handleNextState">
            Continue to Final Test
        </ElementsButton>
    </div>
</template>

<script setup lang="ts">
const { goto, getScore } = useAppState();
const { totalQuestions } = useAppConfig()
const handleNextState = () => goto('final');

const results = computed<{ emoji: string; message: string }>(() => {
    const score = getScore.value;

    if (score <= 1) return { emoji: "😬", message: "Oops!" };
    if (score <= 2) return { emoji: "😅", message: "Not bad!" };
    if (score <= 3) return { emoji: "👍", message: "Good work!" };
    if (score <= 4) return { emoji: "😲", message: "Impressive!" };

    return { emoji: "🏆🌱", message: "Outstanding!" };
});
</script>

<style scoped>
.score-screen {
    @apply flex flex-col flex-nowrap justify-center items-center gap-4;
    @apply min-w-full min-h-full;
    @apply bg-sig-whiteish;
}
</style>