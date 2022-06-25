/* eslint-disable no-extra-boolean-cast */
/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { Model } from "mongoose";
import { nextTick } from "process";
import { stringify } from "querystring";

export class MongooseController<T> {
    constructor(
        public model: Model<T>,
    ){}

    getAllController = async (req: Request, resp: Response) => {
        
        resp.setHeader('Content-Type', 'application/json');
        resp.end(JSON.stringify(await this.model.find()))
    }

    getController = async (req: Request, resp: Response, next: NextFunction) => {
        resp.setHeader('Content-Type', 'application/json');
        try {
            const result = await this.model.findById(req.params.id);
            if(result === null){
                resp.status(400);
                resp.end('No object found')
            }
            resp.status(201);
            resp.end(JSON.stringify(result))
            
        } catch (error) {
            next(error);
        }
      
    }

    postController = async (req: Request,
        resp: Response,
        next: NextFunction
        ) => {
            try {
                
                const newItem = await this.model.create(req.body);
                resp.setHeader('Content-Type', 'application/json');
                resp.status(200);
                resp.end(JSON.stringify(newItem));
            } catch (error) {
                next(error)
            }
    };

    patchController = async (req: Request, resp: Response, next: NextFunction) => {
        resp.setHeader('Content-type', 'application/json');
        
        try {
            const newItem = await this.model.findByIdAndUpdate(req.params.id, req.body);
            resp.end(`Updated data: ${JSON.stringify(req.body)}`);
        } catch (error) {
            next(error)
        }
    };

    deleteController = async (req: Request, resp: Response, next: NextFunction) => {
        try {
            resp.setHeader('Content-type', 'application/json');
            const deletedItem = await this.model.findByIdAndDelete(req.params.id);
            if(deletedItem === null){
            resp.status(400);
                resp.end(`Object not found`);
            } else{
                resp.status(200);
                resp.end(JSON.stringify(deletedItem));
            }
            
        } catch (error) {
            next(error)
        }
        
    };
}