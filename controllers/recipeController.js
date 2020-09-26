"use strict";
import { fetchRecipe } from "../db";

export const home = async (req, res) => {
  const recipes = await fetchRecipe();
  console.log(recipes);
  res.render("home", { pageTitle: "Home", recipes });
};

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
