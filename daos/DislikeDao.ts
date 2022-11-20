import DisLikeModel from "../mongoose/DislikeModel";
import DislikeDaoI from "../interfaces/DislikeDao";

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

    findAllUsersThatDisLikedTuitCount = async (tid: string): Promise<any> => {
        return await DisLikeModel.count({ tuit: tid });
    }

    userDisLikesTuit = async (uid: string, tid: string): Promise<any> => {
        return await DisLikeModel.create({ tuit: tid, disLikedBy: uid });
    }

    userRemovesDislikeTuit = async (uid: string, tid: string): Promise<any> => {
        return await DisLikeModel.deleteOne({ tuit: tid, disLikedBy: uid });
    }
}