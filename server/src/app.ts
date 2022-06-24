import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';
// import path from 'path'

import homeRouter from './routers/home.router.js';
// import { taskRouter } from './router/task.js';
// import { notesRouter } from './router/notes.js';
// import { bookRouter } from './router/books.js';

export const app = express();

// Middlewares

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

export interface ExtraRequest extends Request {
    calculo: number;
}

app.use((req, res, next) => {
    req;
    res;
    console.log('Soy un middlewares');
    (req as ExtraRequest).calculo = 47_638;
    next();
});

app.use('/', homeRouter);
// app.use('/task', taskRouter);
// app.use('/notes', notesRouter);
// app.use('/books', bookRouter);

app.use((error: Error, req: Request, resp: Response, next: NextFunction) => {
    req;
    next;
    console.log(error.message);
    let status = 500;
    if (error.name === 'ValidationError') {
        status = 406;
    } else {
        //
    }
    resp.status(status);
    const result = {
        status: status,
        type: error.name,
        error: error.message,
    };
    resp.end(JSON.stringify(result));
});
