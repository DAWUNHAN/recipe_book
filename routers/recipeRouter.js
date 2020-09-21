import express from "express";
import routes from "../routes";

import { recipe, bookmark, deleteBookmark} from "../controllers/recipeController";

const recipeRouter = express.Router();

recipeRouter.get(routes.recipes, recipe);
recipeRouter.get(routes.bookmark, bookmark);
recipeRouter.get(routes.deleteBookmark, deleteBookmark);

export default recipeRouter;