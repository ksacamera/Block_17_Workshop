// connect coffee_data.js to index.js
const coffeeMenu = require(`./coffee_data.js`);

//#2

// create an array that includes every drink listed by name
// give const descriptive name and have it equal item and start arrow function
const allDrinks = (item) => {
  // we want this to only return the items names
  return item.name;
};
// call back to the coffeeMenu info on the coffee_data.js tab
// using map method will generate new array by calling it on each member of input array
// console.log outside of curly braces
console.log(coffeeMenu.map(allDrinks));

//#3

// create an array of drinks that cost $5 and under
// give const descriptive name for drinks $5 and under
const fiveAndUnder = (item) => {
  // we want this to return just the specified drink prices
  // call on the prices in the coffee_data array
  return item.price <= 5;
};
// apply filter outside of curly braces
const drinksFiveAndUnder = coffeeMenu.filter(fiveAndUnder);
// console.log outside of curly braces
// instructions say "array" so use map method
// call on coffeeMenu info from other tab
console.log(drinksFiveAndUnder);

//#4

// create an array of drinks that are priced at an even number
// give const a descriptive name and set up arrow fuction syntax
const evenPriceDrinks = (item) => {
  // we only want the even priced drinks so use modulus
  return item.price % 2 === 0;
};
// use filter to get only the even priced drinks
const onlyEvenPrices = coffeeMenu.filter(evenPriceDrinks);
console.log(onlyEvenPrices);

//#5

// print the total if you were to order one of every drink
// give const a descriptive name
const allDrinksTotal = (total, item) => {
  // we want the sum of all prices
  return (total += item.price);
};

const sumOfAllDrinks = coffeeMenu.reduce(allDrinksTotal, 0);
console.log(sumOfAllDrinks);

//#6

// create an array with all the drinks that are seasonal
const seasonalDrinks = (item) => {
  // we only want seasonal drinks from OG array
  return item.seasonal;
};
// use a filter to identify if drinks are seasonal or not
// node should only print "affogato" and "cuban espresso"
const onlySeasonalDrinks = coffeeMenu.filter(seasonalDrinks);
console.log(onlySeasonalDrinks);

//#7

// print all the seasonal drinks with the words "with imported beans" after the item name
const seasonalImportedBeans = (item) => {
  if (item.seasonal) {
    // we only want the seasonal drinks and need to include "with imported beans" description
    item.name += ` with imported beans`;
  }
  return item;
};

const onlySeasonalImportedBeans = coffeeMenu.map(seasonalImportedBeans);
console.log(onlySeasonalImportedBeans.filter((item) => item.seasonal));
