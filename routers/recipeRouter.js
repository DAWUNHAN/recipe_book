import express from "express";
import routes from "../routes";

const recipeRouter = express.Router();

recipeRouter.get(routes.recipes, (req, res) => res.send("Recipe wooooow"));
recipeRouter.get(routes.bookmark, (req, res) => res.send("Bookmark"));
recipeRouter.get(routes.deleteBookmark, (req, res) => res.send("deleteBookmark"));

export default recipeRouter;