import dotenv from "dotenv";
dotenv.config();
const fetch = require("node-fetch");
const key = process.env.RECIPE_API_KEY;

export const home = async (req, res) => {
  try {
    const url = `https://api.spoonacular.com/recipes/random?number=1&apiKey=${key}`;
    const response = await fetch(url);
    const data = await response.json();

    console.log(data.recipes[0]);
    const recipes = data.recipes[0];
    res.render("home", { pageTitle: "Home", recipes });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", recipes });
  }
};

// export const home = (req, res) =>
//   res.render("home", { pageTitle: "Home", recipes });

export const search = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  // const searchingBy = req.query.term;
  res.render("search", { pageTitle: "Search", searchingBy });
};

export const recipe = (req, res) =>
  res.render("recipe", { pageTitle: "Recipe" });

export const bookmark = (req, res) => res.render("bookmark", { pageTitle: "" });

export const deleteBookmark = (req, res) =>
  res.render("deleteBookmark", { pageTitle: "Delete recipe" });
