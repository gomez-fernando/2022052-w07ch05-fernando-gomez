import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';
// import path from 'path'

import homeRouter from './routers/home.router.js';
import { robotRouter } from './routers/robot.router.js';

export const app = express();

// Middlewares

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

export interface ExtraRequest extends Request {
    calculo: number;
}

app.use('/', homeRouter);
app.use('/robot', robotRouter);

app.use((error: Error, req: Request, resp: Response, next: NextFunction) => {
    req;
    next;
    let status = 500;
    if (error.name === 'ValidationError') {
        status = 406;
    } 
    if(error.name === 'CastError'){
        status = 400
    }
    resp.status(status);
    const result = {
        status: status,
        type: error.name,
        error: error.message,
    };
    resp.end(JSON.stringify(result));
});
