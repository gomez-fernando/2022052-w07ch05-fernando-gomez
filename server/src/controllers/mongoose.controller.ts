/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { Model } from "mongoose";
// import { Robot } from "../src/models/robot.model";

export class MongooseController<T> {
    constructor(
        public model: Model<T>,
    ){}

    getAllController = async (req: Request, resp: Response) => {
        
        resp.setHeader('Content-Type', 'application/json');
        resp.end(JSON.stringify(await this.model.find()))
    }

    postController = async (req: Request,
        resp: Response,
        next: NextFunction
        ) => {
            try {
                
                const newItem = await this.model.create(req.body);
                resp.setHeader('Content-Type', 'application/json');
                resp.status(201);
                resp.end(JSON.stringify(newItem));
            } catch (error) {
                next(error)
            }
    }
}