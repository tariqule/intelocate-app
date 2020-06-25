

export async function wait(time = 10) {
    return new Promise(resolve => setTimeout(resolve, time));
}
