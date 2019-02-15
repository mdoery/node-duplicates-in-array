"use strict"

/**
 * Given an input array, if the input item is found n or more times in a row,
 * return true. Otherwise, return false. It's important to note that the array
 * is searched for sequential items, not just a total number.
 * @param {Array} an array to be tested
 * @param {Object} search in the array to find this item
 * @param {Integer} an integer, greater than 0.
 * @return {Boolean} if item is found n or more times in a row in the input
 * array returns true, otherwise false.
 */
function validate(arr, item, n) {
	var tot = 0;
	var result = arr.some(function(el) {
		if (el === item) {
			tot++;
		} else {
			tot = 0;
		}
		if (tot >= n) {
			return true;
		}
	});
	return result;
}

if (typeof module !== 'undefined' && module.exports != null) {
    exports.validate = validate;
}