import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import { RobotController } from "./robot.controller";

describe('Given the robotController', () => {
    let req: Partial<Request>;
    let resp: Partial<Response>;
    let next: Partial<NextFunction> = jest.fn();

    let mockModel ={
        find: jest.fn(),
        findById: jest.fn(),
        create: jest.fn(),
        findByIdAndUpdate: jest.fn(),
        findByIdAndDelete: jest.fn(),
    }

    

    let robotController = new RobotController(mockModel as unknown as mongoose.Model<{}>);

    beforeEach(() => {
        req = {
            params: {id: '1'}
        };
        resp = {
            setHeader: jest.fn(),
            status: jest.fn(),
            end: jest.fn(),
        }
    })

    describe('When method getAll is called', () => {
        test('Then resp.end should be called with [mockRobot]', () => {
            async () => {
                const mockResult = [mockRobot];
                (mockModel.find as jest.Mock).mockResolvedValue(mockResult);
                const res = await robotController.getAll(req as Request, resp as Response, next as NextFunction);
                console.log(res);
                expect(resp.end).toHaveBeenCalledWith(JSON.stringify(mockResult));
                expect(resp.end).toHaveProperty('need')
                expect(res).toEqual(40)
            }
        });
    });

    describe('When method getById is called', () => {
        test('Then resp.end should be called with mockRobot', () => {
            async () => {
                const mockResult = mockRobot;
                await robotController.getById(req as Request, resp as Response, next as NextFunction);
                expect(resp.end).toHaveBeenCalledWith(JSON.stringify(mockResult));
            }
        });
    });

    describe('When method post is called', () => {
        test('If no error, then resp.end should be called with mockRobot', () => {
            async () => {
                const mockResult = mockRobot;
                await robotController.getById(req as Request, resp as Response, next as NextFunction);
                expect(resp.status).toHaveBeenCalledWith(201);
                expect(resp.end).toHaveBeenCalledWith(JSON.stringify(mockResult));
            }
        });
        test('If error, then next should be called', () => {
            async () => {
                await robotController.getById(req as Request, resp as Response, next as NextFunction);
                expect(next).toHaveBeenCalled();
            }
        });
    });

    describe('When method patch is called', () => {
        test('If no error, then resp.end should be called with mockRobot', () => {
            async () => {
                const mockResult = mockRobot;
                await robotController.patch(req as Request, resp as Response, next as NextFunction);
                expect(resp.end).toHaveBeenCalledWith(JSON.stringify(mockResult));
            }
        });
        test('If error, then next should be called', () => {
            async () => {
                await robotController.patch(req as Request, resp as Response, next as NextFunction);
                expect(next).toHaveBeenCalled();
            }
        });
    });

    describe('When method delete is called', () => {
        test('If no error, then resp.end should be called with mockRobot', () => {
            async () => {
                const mockResult = mockRobot;
                await robotController.delete(req as Request, resp as Response, next as NextFunction);
                expect(resp.end).toHaveBeenCalledWith(JSON.stringify(mockResult));
            }
        });
        test('If error, then next should be called', () => {
            async () => {
                await robotController.delete(req as Request, resp as Response, next as NextFunction);
                expect(next).toHaveBeenCalled();
            }
        });
    });
});