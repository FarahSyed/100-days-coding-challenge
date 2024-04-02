// An array different data types
var arr = [false, true, 'two', 3, 'four', 5, 'six', ['abc', 'def'], 'eight', { key: 'val' }];
// Return only string by fitlering through the array
var filterString = arr.filter(function (e) { return typeof e === 'string'; });
// Log filtered array
console.log(filterString);
