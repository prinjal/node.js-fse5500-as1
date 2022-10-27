"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const MessageSchema = new mongoose_1.default.Schema({
    message: { type: String },
    to: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'UserModel', require: true },
    from: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'UserModel', require: true },
    sentOn: Date
});
exports.default = MessageSchema;