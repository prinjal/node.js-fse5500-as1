import DisLikeModel from "../mongoose/DislikeModel";
import DislikeDaoI from "../interfaces/DislikeDao";

/**
 * @class DislikeDao Implements Data Access Object managing data storage
 * of Dislikes
 * @implements {DislikeDaoI} DislikeDaoI
 * @property {DislikeDao} dislikeDao Private single instance of DislikeDao
 */
export default class DislikeDao implements DislikeDaoI {
    findAllTuitsDislikedByUser = async (uid: string): Promise<any> => {
        return await DisLikeModel
            .find({ disLikedBy: uid })
            .populate({
                path: "tuit",
                populate: {
                    path: "postedBy"
                }
            })
            .exec();
    }

    findUserDisLikesTuit = async (uid: string, tid: string): Promise<any> => {
        return await DisLikeModel.findOne({ tuit: tid, likedBy: uid });
    }

    /**
     * Uses DislikeModel to retrieve all users in dislike documents from dislikes collection disliked a tuit
     * @param {string} tid Tuit's primary key
     * @returns Promise To be notified when the dislikes are retrieved from database
     */
    findAllUsersThatDisLikedTuitCount = async (tid: string): Promise<any> => {
        return await DisLikeModel.count({ tuit: tid });
    }

    /**
     * Inserts dislike instance into the database
     * @param {string} uid User's primary key
     * @param {string} tid Tuit's primary key
     * @returns Promise To be notified when dislike is inserted into the database
     */
    userDisLikesTuit = async (uid: string, tid: string): Promise<any> => {
        return await DisLikeModel.create({ tuit: tid, disLikedBy: uid });
    }

    /**
     * Remove dislike instance from the database
     * @param {string} uid User's primary key
     * @param {string} tid Tuit's primary key
     * @returns Promise To be notified when dislike is removed from the database
     */
    userRemovesDislikeTuit = async (uid: string, tid: string): Promise<any> => {
        return await DisLikeModel.deleteOne({ tuit: tid, disLikedBy: uid });
    }

    /**
     * Uses DislikeModel to retrieve all tuits in dislike documents from dislikes collection disliked by a user
     * @param {string} uid User's primary key
     * @returns Promise To be notified when the dislikes are retrieved from database
     */
    findAllTuitsDisLikedByUser = async (uid: string): Promise<any> => {
        return await DisLikeModel
            .find({ disLikedBy: uid })
            .populate("tuit")
            .exec();
    }
}