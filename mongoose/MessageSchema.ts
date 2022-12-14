/**
 * @file Implements mongoose schema for messages
 */

import mongoose from "mongoose";


/**
 * @typedef Message Represents the message object user sent
 * @property {string} message The content of the message
 * @property {ObjectId} to The user that received the message
 * @property {ObjectId} from The user that sent the message
 * @property {date} sentOn The date the message is sent
 */
const MessageSchema = new mongoose.Schema({
    message: { type: String },
    to: { type: mongoose.Schema.Types.ObjectId, ref: 'UserModel', require: true },
    from: { type: mongoose.Schema.Types.ObjectId, ref: 'UserModel', require: true },
    sentOn: Date
});

export default MessageSchema;