import mongoose from 'mongoose';
import { mongooseConnect } from '../db/mongoose.js';

await mongooseConnect();

export interface iRobot{
    id: string;
    name: string;
    image: string;
    speed: number;
    endurance: number;
    creationDate: string;
}

const robotSchema = new mongoose.Schema({
    name : {
        type: String, required: true,
    },
    image : {
        type: String
    },
    speed : {
        type: Number, min: 0, max:10
    },
    endurance : {
        type: Number, min: 0, max:10
    },
    creationDate : {
        type: String
    }
});

export const Robot = mongoose.model('Robot', robotSchema);
