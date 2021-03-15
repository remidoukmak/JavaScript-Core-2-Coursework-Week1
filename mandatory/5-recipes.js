/** 

The Recipe Card
Never forget another recipe!

Create an object to hold information on your favorite recipe. 

It should have properties for 

- Title (a string), 
- Servings (a number), and 
- Ingredients (an array of strings)

On separate lines (one console.log statement for each), log the recipe information so it looks like:

Mole
Serves: 2
Ingredients:
cinnamon
cumin
cocoa

You should write and log at least 5 recipes

**/

let recipes = {
  Fatteh: {
    serves: 7,
    ingredients: ["Chick Peas", "Flat Bread", "Lemon Juice", "Cumin"],
  },
  "Lentil Soup": {
    serves: 5,
    ingredients: ["Green Lentil", "Chicken stock", "Rice", "Seven spices"],
  },
  Kebbeh: {
    serves: 6,
    ingredients: ["Mince Meat", "Onions", "Bulgur", "Butter", "Walnut "],
  },
  Kunafa: {
    serves: 3,
    ingredients: [
      "Small Pasta",
      "Double Cream",
      "Mozorella",
      "Halloumi Cheese",
      "Golden Syrup",
    ],
  },
  "Fish and Chips": {
    serves: 2,
    ingredients: [
      "Salmon Fillet",
      "Sweet Potato",
      "Broccoli",
      "Mashed Peas",
      "Gravy",
    ],
  },
};

console.log(recipes);
for (let key of Object.keys(recipes)) {
  let emptySpace = "";
  for (let key2 of Object.values(recipes[key].ingredients)) {
    emptySpace = emptySpace.concat(key2).concat("\n");
  }
  console.log(
    key
      .concat("\nServes:")
      .concat(recipes[key].serves)
      .concat("\nIngredients:\n")
      .concat(emptySpace.split(",").join(": "))
  );
}
