"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const BookmarkSchema = new mongoose_1.default.Schema({
    bookmarkedTuit: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "Tuits", require: true },
    bookmarkedBy: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "UserModel", require: true }
}, { collection: "bookmarks" });
exports.default = BookmarkSchema;
