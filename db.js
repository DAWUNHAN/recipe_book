// import dotenv from "dotenv";
// dotenv.config();
// const fetch = require("node-fetch");
// const key = process.env.RECIPE_API_KEY;

// export const fetchRecipe = async (req, res) => {
//   try {
//     const url = `https://api.spoonacular.com/recipes/random?number=2&apiKey=${key}`;
//     const response = await fetch(url);
//     const data = await response.json();
//     let recipes = data.recipes;
//     console.log("good");
//     return recipes;
//     // console.log(recipes);
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const searchRecipe = async (req, res) => {t
//   console.log(req);
//   try {
//     const url = `https://api.spoonacular.com/recipes/search?query=${searchingBy}&number=2&apiKey=${key}`;
//     const response = await fetch(url);
//     const data = await response.json();
//     // console.log(data);
//     let searchResult = data.results;
//     // console.log("search");
//     return searchResult;
//     // console.log(recipes);
//   } catch (error) {
//     console.log(error);
//   }
// };
