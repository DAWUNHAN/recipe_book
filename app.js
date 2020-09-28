import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleware } from "./middlewares";
import routes from "./routes";
import userRouter from "./routers/userRouter";
import recipeRouter from "./routers/recipeRouter";
import globalRouter from "./routers/globalRouter";
import csp from "helmet-csp";
import path from "path";

const app = express();
app.use(helmet());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use("/static", express.static("static"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));
app.use(localsMiddleware);

app.use("/", globalRouter);
app.use("/user", userRouter);
app.use("/recipe", recipeRouter);

export default app;
