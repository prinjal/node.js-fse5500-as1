import LikeDaoI from "../interfaces/LikeDao";
import LikeModel from "../mongoose/LikeModel";
import Like from "../models/Like";


/**
 * @class LikeDao Implements Data Access Object managing data storage
 * of Likes
 * @implements {LikeDaoI} LikeDaoI
 * @property {LikeDao} likeDao Private single instance of LikeDao
 */
export default class LikeDao implements LikeDaoI {
    private static likeDao: LikeDao | null = null;

    /**
     * Count how many likes this tuit has
     * @param {string} tid Tuit's primary key
     * @returns Promise To be notified when like is removed from the database
     */
    findAllUsersThatLikedTuitCount = async (tid: string): Promise<any> => {
        return await LikeModel.count({ tuit: tid });
    }

    /**
     * Uses LikeModel to retrieve all users in like documents from likes collection liked a tuit
     * @param {string} tid Tuit's primary key
     * @returns Promise To be notified when the likes are retrieved from database
     */
    findAllUsersThatLikedTuit = async (tid: string): Promise<any> => {
        return await LikeModel
            .find({ tuit: tid })
            .populate("likedBy")
            .exec();
    }

     /**
     * Uses LikeModel to retrieve all tuits in like documents from likes collection liked by a user
     * @param {string} uid User's primary key
     * @returns Promise To be notified when the likes are retrieved from database
     */
    findAllTuitsLikedByUser = async (uid: string): Promise<any> => {
        return await LikeModel
            .find({ likedBy: uid })
            .populate({
                path: "tuit",
                populate: {
                    path: "postedBy"
                }
            })
            .exec();

    }

    /**
     * Inserts like instance into the database
     * @param {string} uid User's primary key
     * @param {string} tid Tuit's primary key
     * @returns Promise To be notified when like is inserted into the database
     */
    userLikesTuit = async (uid: string, tid: string): Promise<any> => {
        return await LikeModel.create({ tuit: tid, likedBy: uid });
    }

    /**
     * Remove like instance from the database
     * @param {string} uid User's primary key
     * @param {string} tid Tuit's primary key
     * @returns Promise To be notified when like is removed from the database
     */
    userUnlikesTuit = async (uid: string, tid: string): Promise<any> => {
        return await LikeModel.deleteOne({ tuit: tid, likedBy: uid });
    }

    findUserLikesTuit = async (uid: string, tid: string): Promise<any> => {
        return await LikeModel.findOne({ tuit: tid, likedBy: uid });
    }



}