import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import { RobotController } from "./robot.controller";

describe('Given the robotController', () => {
    let req: Partial<Request>;
    let resp: Partial<Response>;
    let next: Partial<NextFunction> = jest.fn();

    const mockModel ={
        find: jest.fn(),
        findById: jest.fn(),
        create: jest.fn(),
        findByIdAndUpdate: jest.fn(),
        findByIdAndDelete: jest.fn(),
    }

    let mockRobot = {name: 'test object'}

    const robotController = new RobotController(mockModel as unknown as mongoose.Model<{}>);

    beforeEach(() => {
        req = {
            params: {id: '1'}
        };
        resp = {
            // setHeader: jest.fn(),
            // status: jest.fn(),
            end: jest.fn(),
        }
    })

    describe('When method getAll is called', () => {
        test('Then resp.end should be called with [mockResult]', () => {
            async () => {
                const mockResult = mockRobot;
                await robotController.getAll(req as Request, resp as Response, next as NextFunction);
                expect(resp.end).toHaveBeenCalledWith(JSON.stringify(mockResult));
            }
        });
    });
});