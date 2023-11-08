/**
 * 
* @param {string} txt - The text string to be sliced.
* @param {number} [max = 50] - The maximum length of the sliced text. Defaults to 50 if not provided.
* @returns {string} - The sliced text string.
* Slices a text string to a specified maximum length.
If the text length is greater than or equal to the maximum length, it truncates the text and adds ellipsis at the end.
If the maximum length is not provided, it defaults to 50.
*/
export const textSlicer = (txt: string, max: number = 50) => {
    if (txt.length >= max) {
        return `${txt.slice(0, max)} ...`
    }
    return txt
}