"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// const Tuit = require("../models/Tuit");
const TuitSchema = new mongoose_1.default.Schema({
    tuit: { type: String, required: true },
    postedOn: Date,
    postedBy: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'UserModel', required: true },
    comments: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Tuit' }],
    likes: Number
}, { collection: 'tuits' });
exports.default = TuitSchema;
