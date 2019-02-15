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

/**
 * Returns the number of times the input item is found in the array.
 * If input n is an integer, stops counting after a max of n items are found.
 * @param {Array} an array to be tested
 * @param {Object} search in the array to find this item
 * @param {Integer} an integer, greater than 0, not required.
 * @return {Boolean} returns the number of times that item is found in the
 * input arr, up to n, if n is set
 */
function count(arr, item, n) {
	var tot = 0;
	if (typeof n === "number" && n > 0) {
		arr.some(function(el) {
			if (el === item) {
				tot++;
			}
			if (tot >= n) {
				return true;
			}
		});
	} else {
		arr.forEach(function(el) {
			if (el === item) {
				tot++;
			}
		});
	}
	return tot;
}

if (typeof module !== 'undefined' && module.exports != null) {
    exports.validate = validate;
    exports.count = count;
}