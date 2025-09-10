<template>
    <div class="welcome-screen-container">
        <div class="form-container">
            <form
                class="form"
                @submit.prevent="handleGoToQuestion"
            >
                <ElementsCompanySlogan class="company-slogan" />
                <div class="form-controls-container">
                    <div class="control-container">
                        <label for="username">Name</label>
                        <input
                            id="username"
                            v-model="username"
                            type="text"
                            placeholder="Enter your name"
                            size="1"
                            autocomplete="username"
                            autofocus
                            :class="{ 'is-invalid': isUsernameError }"
                            @focus="handleResetError"
                        >
                    </div>
                    <div class="control-container">
                        <label for="email">Email</label>
                        <input
                            id="email"
                            v-model="email"
                            type="email"
                            placeholder="Enter your email"
                            size="1"
                            autocomplete="email"
                            :class="{ 'is-invalid': isEmailError }"
                            @focus="handleResetError"
                        >
                    </div>
                    <div
                        class="privacy-policy"
                        :class="{ 'is-invalid': isPrivayPolicyError }"
                    >
                        <label for="privacy-policy-agreement">
                            <input
                                id="privacy-policy-agreement"
                                v-model="privacyPolicyAgreed"
                                type="checkbox"
                                class="grow-0 shrink-0"
                            >
                            <span class="text-xs md:text-sm xl:text-base text-pretty text-justify">
                                I understand that GrowRoom will securely hold my data in accordance with their
                                <a
                                    href="https://growroom.agency/privacy-policy"
                                    class="underline underline-offset-2"
                                    target="_blank"
                                >privacy policy</a>.
                            </span>
                        </label>
                    </div>
                    <div class="control-container">
                        <button type="submit">
                            Start Game
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
const { goto, reset, setUserData } = useAppState();

const email = ref<string>('');
const username = ref<string>('');
const privacyPolicyAgreed = ref<boolean>(false);

const resetErrorStateTimer = ref<number | undefined>(undefined);
const isPrivayPolicyError = ref<boolean>(false);
const isEmailError = ref<boolean>(false);
const isUsernameError = ref<boolean>(false);

const handleResetError = () => {
    window.clearTimeout(resetErrorStateTimer.value);

    resetErrorStateTimer.value = undefined;
    isPrivayPolicyError.value = false;
    isEmailError.value = false;
    isUsernameError.value = false;
}

const handleGoToQuestion = async () => {
    window.clearTimeout(resetErrorStateTimer.value);

    isEmailError.value = /^.*@.*\..{2,}$/i.test(email.value) !== true;
    isUsernameError.value = username.value.trim().length <= 0;
    isPrivayPolicyError.value = privacyPolicyAgreed.value !== true;

    if (isEmailError.value || isUsernameError.value || isPrivayPolicyError.value) {
        resetErrorStateTimer.value = window.setTimeout(() => {
            handleResetError()
        }, 4000);

        return
    } else {
        setUserData({
            email: email.value,
            username: username.value,
        })
        goto('questionnaire');
    }
}

onMounted(() => {
    isEmailError.value = false;
    isUsernameError.value = false;
    isPrivayPolicyError.value = false;

    reset();
});
</script>

<style scoped>
.welcome-screen-container {
    @apply flex flex-col;
    @apply min-w-full min-h-full;
    @apply bg-left-top bg-cover bg-no-repeat;
    @apply bg-[url(/assets/bg-mobile.webp)] md:bg-[url(/assets/bg-tablet.webp)] xl:bg-[url(/assets/bg-desktop.webp)];
}

/* controls */
.form input,
.form button {
    @apply min-w-0 overflow-hidden;
}

.form .form-controls-container {
    @apply flex flex-col flex-nowrap justify-start items-stretch min-w-0;
}

.form .form-controls-container .control-container {
    @apply flex flex-col justify-start items-stretch;
}

/* colors */
.form {
    @apply text-white;
}

.form input {
    @apply border-none outline-none bg-white;
}

.form .is-invalid {
    @apply animate-[bounce-3times_1s_3];
}

.form input {
    @apply text-sig-gray;
}

.form input::placeholder {
    @apply text-sig-placeholder;
}

.form button {
    @apply bg-sig-accent text-sig-gray;
}

/* placing form */

.welcome-screen-container {
    @apply items-center justify-end pb-20;
    @apply md:pb-32;
    @apply xl:items-end xl:pb-32 xl:pr-32;
}

/* sizing - company-slogan is base width */

.form,
.form .company-slogan,
.form .privacy-policy {
    @apply origin-center object-contain w-64;
    @apply md:w-80;
    @apply xl:w-[30.5rem];
}

.form label {
    @apply text-xs;
    @apply md:text-sm;
    @apply xl:text-lg;
}

.form input,
.form button {
    @apply px-2 py-2.5 text-xs rounded-md;
}

.form input {
    @apply md:text-base;
    @apply xl:text-lg xl:py-4 xl:px-3;
}

.form button {
    @apply md:py-3.5 md:font-bold md:tracking-wider;
    @apply xl:text-lg xl:py-4 xl:tracking-normal;
}

.form .form-controls-container {
    @apply gap-2;
    @apply md:mt-5;
    @apply xl:gap-3 xl:mt-12;
}

.form .form-controls-container .control-container {
    @apply gap-1;
    @apply xl:gap-0.5;
}

.form .form-controls-container .control-container:has(button) {
    @apply mt-2;
    @apply xl:mt-4;
}

/* misc */
.form .privacy-policy {
    @apply flex flex-row justify-start items-start gap-2;
    @apply cursor-pointer select-none;
}
</style>
