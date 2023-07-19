/** 
 * 19/07/2023
 * Arrays in js are lists from python. They are indexed, can have multiple data types
 * and are denoted with [] brackets. They can also be nested and they have several methods
 * one can use to work with them. 
*/

// Accessing elements in an array
const multiArray = ["string", 95, [5, 7, 8], true];
console.log(multiArray[2]);
let value = multiArray[2][2];
console.log(value);

//Some Methods of arrays
//indexOf method
const names = ['Sade', 'Jimmy', 'Frank', 'Willheimena', 'Asante', 'Josephine'];

//this returns 5
lastName = names.indexOf("Josephine");
console.log(lastName);

//this returns -1
noName = names.indexOf('Salewa');
console.log(noName);


/**
 * Other array methods include:
 * push(): to add items to the end of the array.
 * unshift(): to add an item to the start of the array.
 * pop(): to remove the last item from the array.
 * shift(): to remove the first item from the array.
 * splice(): to remove an item from a particular position, using its index.
 * split(): convert a string to an array.
 */
