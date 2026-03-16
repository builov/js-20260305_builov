/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  let sortedArr = [];
  let arrToSort = [...arr];

  sortedArr = arrToSort.sort(function (a, b) {
    let result = a.localeCompare(b, ['ru', 'en'], {caseFirst: "upper"});

    if (param === 'desc') {
      return result * -1;
    }

    return result;
  });

  return [...sortedArr];
}
