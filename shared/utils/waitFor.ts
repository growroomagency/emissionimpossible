export default async function(wait: number) {
    return new Promise((res) => setTimeout(res, wait));
}