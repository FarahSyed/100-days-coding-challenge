// An array different data types
const arr = [false, true, 'two', 3, 'four', 5, 'six', ['abc', 'def'], 'eight', {key: 'val'}];

// Return only string by fitlering through the array
const filterString = arr.filter((e) => typeof e === 'string');

// Log filtered array
console.log(filterString);