import { Router } from "express";
import MainController from "../controller/main.controller";

const rootRouter: Router = Router();
const mainController: MainController = new MainController();

rootRouter.get("/", mainController.get);

export default rootRouter;
