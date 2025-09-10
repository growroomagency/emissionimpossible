type AppState = 'welcome' | 'questionnaire' | 'score' | 'final';

const state = ref<AppState>('welcome');
const score = ref<number>(0);
const userdata = ref<{ username: string, email: string, url: string }>({ username: '', email: '', url: '' });

export default function () {
    return {
        state,

        goto: (next: AppState) => state.value = next,

        getScore: computed(() => score.value),
        getResultedState: computed(() => ({
            ...userdata.value,
            score: score.value,
        } satisfies ResultedState)),

        reset: () => {
            score.value = 0;
            userdata.value.email = '';
            userdata.value.username = '';
            userdata.value.url = '';
        },

        setUserData: (data: { username: string, email: string }) => {
            userdata.value.email = data.email;
            userdata.value.username = data.username;
        },
        setUserUrl: (url: string) => userdata.value.url = url,
        addToScore: () => score.value = score.value + 1,
    }
}