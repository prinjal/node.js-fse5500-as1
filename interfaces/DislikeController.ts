import { Request, Response } from "express";

export default interface DisLikeControllerI {
    findAllTuitsDisLikedByUser(req: Request, res: Response): void;
    userTogglesTuitDisLikes(req: Request, res: Response): void;
};