import { Router } from "express";
import { MongooseController } from "../controllers/mongoose.controller.js";
import { Robot } from "../models/robot.model.js";

export const robotController = new MongooseController(Robot);
export const robotRouter = Router();

robotRouter.get('/', robotController.getAllController);
// robotRouter.get('/:id', robotController.getController);
robotRouter.post('/', robotController.postController);
// robotRouter.patch('/:id', robotController.patchController);
// robotRouter.delete('/:id', robotController.deleteController);
