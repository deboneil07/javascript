// array push - adds a value to an array.
// for example - (name of an array).push("any value");
var fruits = [["mango"],["banana"],["apple"],["pineapple"],["jackfruit"]];
console.log('before push', fruits);
fruits.push("kiwi");
console.log('after push', fruits);

// array pop - remove the last term of an array.
// for example - (name of the array).pop();
var fruits =  [["mango"],["banana"],["apple"],["pineapple"],["jackfruit"]];
console.log('before pop', fruits);
fruits.pop();
console.log('after pop', fruits);
// array shift - removes the first term of an array.
// for example - (name of an array).shift()'
var fruits = [["mango"],["banana"],["apple"],["pineapple"],["jackfruit"]];
console.log('before shift', fruits);
fruits.shift();
console.log('after shift', fruits);