export const textSlicer = (txt: string, max: number = 50) => {
    if (txt.length >= max) {
        return `${txt.slice(0, max)} ...`
    }
    return txt
}