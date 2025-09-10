<template>
    <div class="finall-screen">
        <div class="text-2xl md:text-4xl font-bold text-center">
            How does your website compare?
        </div>

        <ElementsCardsContainer>
            <ElementsCardContainer>
                <div>
                    <ElementsBrandLogo :company="growRoom" />
                </div>
                <div class="font-extrabold text-2xl text-black">
                    {{ growRoom.name }}
                </div>
                <ElementsAnswerBlock 
                    class="bg-green-100 text-green-800"
                    :company="growRoom"
                    :is-visible="true"
                    :is-correct-choise="undefined"
                />
            </ElementsCardContainer>
            <ElementsCardContainer class="border-2 border-dashed border-sig-placeholder">
                <div class="text-8xl py-4">🌐</div>
                <div class="font-extrabold text-2xl text-sig-gray">
                    Your Website
                </div>
                <div class="info-custom-block">
                    <input 
                        class="url-input" 
                        size="1" 
                        type="url" 
                        placeholder="Enter your URL" 
                        autofocus
                        @focusin="handleToggleSubmitButton(true)"
                        @focusout="handleToggleSubmitButton(false)"
                        @input="handleSetUserUrl"
                    >
                    <Transition name="fade">
                        <div v-if="showSubmitButton" class="absolute top-2/3 z-50">
                            <ElementsButton @click="submitFinallState">
                                <span class="text-sm md:text-base xl:text-lg">Submit</span>
                            </ElementsButton>
                        </div>
                    </Transition>
                    <div class="url-input-description" :class="{ 'is-hidden': showSubmitButton }">
                        We'll test your website and send you the results!
                    </div>
                </div>
            </ElementsCardContainer>

            <template #footer>
                <div class="bg-sig-green text-white p-8 rounded-xl text-center">
                    <div class="text-lg">
                        Reduce your website's environmental footprint whilst growing your business with GrowRoom - Where good brands bloom.
                    </div>
                </div>
            </template>
        </ElementsCardsContainer>

        <ElementsButton class="mt-10" @click="handleGoHome">Restart</ElementsButton>
    </div>
</template>

<script setup lang="ts">
const { goto, setUserUrl, getResultedState } = useAppState();
const { growRoom } = useAppConfig();

const showButtonTimerId = ref<number | undefined>();
const showSubmitButton = ref(false);

const handleToggleSubmitButton = (state: boolean) => {
    window.clearTimeout(showButtonTimerId.value);

    if (state === true) {
        showSubmitButton.value = true;
    } else {
        showButtonTimerId.value = window.setTimeout(() => {
            showSubmitButton.value = false;
        }, 250);
    }
}
const handleSetUserUrl = (e: Event) => setUserUrl((e.target as HTMLInputElement).value);
const handleGoHome = () => goto('welcome');
const submitFinallState = () => {
    $fetch('/api/submit', {
        method: 'post',
        body: getResultedState.value
    }).catch(() => {
        // ignore
    })
}

onMounted(() => submitFinallState())
</script>

<style scoped>
.finall-screen {
    @apply flex flex-col flex-nowrap justify-center items-center gap-2 py-10 md:py-0;
    @apply min-w-full min-h-full;
    @apply bg-sig-whiteish;
}

.finall-screen .info-custom-block {
    @apply flex flex-col flex-nowrap justify-center items-center gap-1 min-w-0;
    @apply rounded-xl w-4/5;
    @apply h-max py-3 px-2 mb-6;
    @apply bg-sig-whiteish text-sig-gray;
    @apply relative;
}

.finall-screen .info-custom-block .url-input {
    @apply block outline-none border-none rounded-md w-full;
    @apply min-w-0 p-2;
    @apply text-sm md:text-base xl:text-lg;
}

.finall-screen .info-custom-block .url-input-description {
    @apply text-sm text-center;
    @apply transition-[opacity,transform] duration-300;
    @apply opacity-100 translate-y-0;
}

.finall-screen .info-custom-block .url-input-description.is-hidden {
    @apply opacity-0 translate-y-2;
}
</style>
