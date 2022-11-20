/**
 * @file Implements mongoose schema for likes
 */

import mongoose, { Schema } from "mongoose";
import Like from "../models/Like";
import TuitModel from "./TuitModel";
import UserModel from "./UserModel";


/**
 * @typedef Like Represents the like relation between a user and a tuit
 * @property {ObjectId} tuit The id of the tuit like by user
 * @property {ObjectId} likedBy The id of the user
 */
 const DislikeSchema = new mongoose.Schema({
    tuit: {type: Schema.Types.ObjectId,
           ref: TuitModel},
    disLikedBy: {type: Schema.Types.ObjectId,
              ref: UserModel},
  }, {collection: "dislikes"});
  export default DislikeSchema;