/***
 * @param {number} value temperture value
 * @param {string} measure measure of input temp
 * @returns {number} temperture in c or f
 */

export function convertTemp(value, measure) {
	return !measure ? Math.floor(value * (9 / 5) + 32) : Math.floor((value - 32) * (5 / 9))
}
