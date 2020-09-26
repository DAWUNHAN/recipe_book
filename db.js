import dotenv from "dotenv";
dotenv.config();
const fetch = require("node-fetch");
const key = process.env.RECIPE_API_KEY;

// export const recipes = [
//   {
//     id: 1,
//     title: "kimchi",
//     category: "korean",
//   },
//   {
//     id: 2,
//     title: "pizza",
//     category: "italian",
//   },
// ];

export const fetchRecipe = async (req, res) => {
  try {
    const url = `https://api.spoonacular.com/recipes/random?number=2&apiKey=${key}`;
    const response = await fetch(url);
    const data = await response.json();

    // let recipes = data.recipes[0];
    let recipes = data.recipes;
    console.log("good");
    return recipes;
    // console.log(recipes);
  } catch (error) {
    console.log(error);
  }
};
