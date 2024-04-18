const city = 'New York'
const cityStr = 'City'
const shoppingList = 'apples, bananas, oranges, grapes'

// TODO get the INDEX of the character where 'York' word is found in the city variable
const cityIndex = city.indexOf("York");
console.log(cityIndex);

// TODO - get the substring "York" from the city variable
const citySubstring = city.substring(4);
console.log(citySubstring)

// TODO = replace 'York' with 'Delhi'
const cityReplaced = city.replace("York", "Delhi");

// TODO - check if city starts with 'New' and ends with 'York'
const cityStartsWith = true;
cityStartsWith === city[0]

const cityEndsWith = true;
cityEndsWith === city[1];

// TODO - split the shopping list into an array of items without spaces
// hint (you might want to replace first, then split)
const shoppingListArray = shoppingList.split(" ");
console.log(shoppingListArray);

// TODO - concatenate two strings using the `${var}` syntax
// make cityStrConcat equal to 'New York City'
const cityStrConcat = city.concat(" City");
console.log(cityStrConcat);

module.exports = {
  cityIndex,
  citySubstring,
  cityReplaced,
  cityStartsWith,
  cityEndsWith,
  shoppingListArray,
  cityStrConcat
}
