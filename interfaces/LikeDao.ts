import Like from "../models/Like";

/**
 * @file Declares API for Likes related data access object methods
 */
export default interface LikeDaoI {
    findAllUsersThatLikedTuit(tid: string): Promise<Like[]>;
    findAllTuitsLikedByUser(uid: string): Promise<Like[]>;
    userUnlikesTuit(tid: string, uid: string): Promise<any>;
    userLikesTuit(tid: string, uid: string): Promise<Like>;
    findAllUsersThatLikedTuitCount(tid: string): Promise<any>;
    findUserLikesTuit(tid: string, uid: string): Promise<Like>;
};