// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

//       *** Practice ***

// *** Part 1: Math Problems

  //Check if all numbers are divisible by 5. Cache the result in a variable.
 const isDivisibleBy5 = n1 % 5 === 0 && n2 % 5 === 0 && n3 % 5 === 0 && n4 % 5 === 0;
console.log(`${n1} is divisible by 5: ${isDivisibleBy5}`); 

// Check if the first number is larger than the last. Cache the result in a variable.
const isFirstLarger = n1 > n4;
console.log(`${n1} is larger than ${n4}: ${isFirstLarger}`);

//Accomplish the following arithmetic chain:
//  1. Subtract the first number from the second number.
const result1 = n2 - n1;
console.log(`${n2} - ${n1} = ${result1}`);

//  2. Multiply the result by the third number.
const result2 = result1 * n3;
console.log(`${result1} * ${n3} = ${result2}`);
//  3.Find the remainder of dividing the result by the fourth number.
const result3 = result2 % n4;
console.log(`The remainder of ${result2} divided by ${n4} is ${result3}`);
//Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
const isUnder25 = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25;
console.log(`All numbers are under 25: ${isUnder25}`);
 

// *** Part 2: Practical Math

/*You are planning a cross-country road trip!
The distance of the trip, in total, is 1,500 miles.
Your car’s fuel efficiency is as follows:
At 55 miles per hour, you get 30 miles per gallon.
At 60 miles per hour, you get 28 miles per gallon.
At 75 miles per hour, you get 23 miles per gallon.
You have a fuel budget of $175.
The average cost of fuel is $3 per gallon.*/

// How many gallons of fuel will you need for the entire trip?
const tripDistance = 1500;
const fuelEfficiency55 = 30;
const fuelEfficiency60 = 28;
const fuelEfficiency75 = 23;
const fuelBudget = 175;
const fuelCostperGallon = 3;

const gallons55 = tripDistance / fuelEfficiency55;
const gallons60 = tripDistance / fuelEfficiency60;
const gallons75 = tripDistance / fuelEfficiency75;
console.log(`Gallons needed at 55 mph: ${gallons55}`);
console.log(`Gallons needed at 60 mph: ${gallons60}`);
console.log(`Gallons needed at 75 mph: ${gallons75}`);

// Will your budget be enough to cover the fuel expense?
const cost55 = gallons55 * fuelCostperGallon;
const cost60 = gallons60 * fuelCostperGallon;
const cost75 = gallons75 * fuelCostperGallon;

const isBudgetEnough55 = cost55 <= fuelBudget;
const isBudgetEnough60 = cost60 <= fuelBudget;
const isBudgetEnough75 = cost75 <= fuelBudget;
console.log(`Budget enough at 55 mph: ${isBudgetEnough55}`);
console.log(`Budget enough at 60 mph: ${isBudgetEnough60}`);
console.log(`Budget enough at 75 mph: ${isBudgetEnough75}`);



//How long will the trip take, in hours?
const time55 = tripDistance / 55;
const time60 = tripDistance / 60;
const time75 = tripDistance / 75;
console.log(`Time at 55 mph: ${time55} hours`);
console.log(`Time at 60 mph: ${time60} hours`);
console.log(`Time at 75 mph: ${time75} hours`);

console.log(`The trip will take ${time55} hours at 55 mph, and cost $${cost55}.`);
console.log(`The trip will take ${time60} hours at 60 mph, and cost $${cost60}.`);
console.log(`The trip will take ${time75} hours at 75 mph, and cost $${cost75}.`);