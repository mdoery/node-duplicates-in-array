## A node.js library to look for n-tuplicate items in an array ##

examples:

``
var res = validate(["space","letter","space","space","space","letter"], "space", 2);
// res will be true because there are three "space" elements in a row.
``

``
var res = validate(["space","letter","space","letter","space","letter"], "space", 2);
// res will be false because there are no "space" elements in a row,
// although there are a total of 3 in the array.
``
