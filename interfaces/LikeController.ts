import { Request, Response } from "express";

export default interface LikeControllerI {
    findAllUsersThatLikedTuit(req: Request, res: Response): void;
    findUserLikesTuit(req: Request, res: Response): void;
    findAllTuitsLikedByUser(req: Request, res: Response): void;
    findAllUsersThatLikedTuitCount(req: Request, res: Response): void;
    userLikesTuit(req: Request, res: Response): void;
    userUnlikesTuit(req: Request, res: Response): void;
    userTogglesTuitLikes(req: Request, res: Response): void;
};