"use strict";

import dotenv from "dotenv";
dotenv.config();
const fetch = require("node-fetch");
const key = process.env.RECIPE_API_KEY;

export const home = async (req, res) => {
  try {
    const url = `https://api.spoonacular.com/recipes/random?number=3&apiKey=${key}`;
    const response = await fetch(url);
    const data = await response.json();
    let recipes = data.recipes;
    console.log("good");
    // console.log(recipes);

    const imageIcon = ["Breakfast", "Burger", "Korean", "Chinese", "Dessert"];
    let category = [];

    for (let i in imageIcon) {
      let arrayImage = {
        urlName: imageIcon[i],
        urlImage: `https://raw.githubusercontent.com/DAWUNHAN/recipe_book/master/public/img/${imageIcon[i]}.png`,
      };
      category.push(arrayImage);
    }
    console.log(category);
    res.render("home", { pageTitle: "Home", recipes, category });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", recipes });
  }
};

export const search = async (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  try {
    const url = `https://api.spoonacular.com/recipes/search?query=${searchingBy}&number=3&apiKey=${key}`;
    const response = await fetch(url);
    const data = await response.json();
    let searchResult = data.results;
    res.render("search", { pageTitle: "Search", searchingBy, searchResult });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const recipe = (req, res) =>
  res.render("recipe", { pageTitle: "Recipe" });

export const bookmark = (req, res) => res.render("bookmark", { pageTitle: "" });

export const deleteBookmark = (req, res) =>
  res.render("deleteBookmark", { pageTitle: "Delete recipe" });
