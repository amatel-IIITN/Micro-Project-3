const food = require('./food.json');

// 1. list all the food items

food.map(foodie => {
    console.log(foodie);
})

// 2. list all the food items with category vegetables

const question2 = food.filter(foodie => {
    return foodie.category === 'Vegetable';
})

console.log(question2);

// 3. list all the food items with category fruit

const question3 = food.filter(foodie => {
    return foodie.category === 'Fruit';
})

console.log(question3);

// 4. list all the food items with category protien

const question4 = food.filter(foodie => {
    return foodie.category === 'Protein';
})

console.log(question4);

// 5. list all the food items with category nuts

const question5 = food.filter(foodie => {
    return foodie.category === 'Nuts';
})

console.log(question5);

// 6. list all the food items with category grains

const question6 = food.filter(foodie => {
    return foodie.category === 'Grain';
})

console.log(question6);

// 7. list all the food items with category dairy

const question7 = food.filter(foodie => {
    return foodie.category === 'Dairy';
})

console.log(question7);

// 8. list all the food items with calorie above 100

const question8 = food.filter(foodie => {
    return foodie.calorie > 100;
})

console.log(question8);

// 9. list all the food items with calorie below 100

const question9 = food.filter(foodie => {
    return foodie.calorie < 100;
})

console.log(question9);

// 10. list all the food items with highest protien content to lowest

food.sort(function(a, b){return b.protiens - a.protiens});
console.log(food);

// 11. list all the food items with lowest cab content to highest

food.sort(function(a, b){return a.cab - b.cab});
console.log(food);