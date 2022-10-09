"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Tuit_1 = __importDefault(require("../models/Tuit"));
const TuitSchema = new mongoose_1.default.Schema({
    tuit: { type: String, required: true },
    postedOn: Date.now,
    postedBy: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'User', required: true },
    comments: [Tuit_1.default],
    likes: Number
}, { collection: 'tuits' });
exports.default = TuitSchema;
