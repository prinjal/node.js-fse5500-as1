import mongoose from "mongoose";
import Tuit from "../models/Tuit";
import User from "../models/User";
// const Tuit = require("../models/Tuit");

const TuitSchema = new mongoose.Schema({
    tuit: { type: String, required: true },
    postedOn: Date,
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Tuit'}],
    likes: Number
}, { collection: 'tuits' });

export default TuitSchema;