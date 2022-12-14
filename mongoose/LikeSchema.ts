/**
 * @file Implements mongoose schema for likes
 */

import mongoose, { Schema } from "mongoose";
import Like from "../models/Like";


/**
 * @typedef Like Represents the like relation between a user and a tuit
 * @property {ObjectId} tuit The id of the tuit like by user
 * @property {ObjectId} likedBy The id of the user
 */
 const LikesSchema = new mongoose.Schema({
    tuit: {type: Schema.Types.ObjectId,
           ref: "TuitModel"},
    likedBy: {type: Schema.Types.ObjectId,
              ref: "UserModel"},
  }, {collection: "likes"});
  export default LikesSchema;