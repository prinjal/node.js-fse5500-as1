import mongoose from "mongoose";
import AccountType from "../models/AccountType";
import MaritalStatus from "../models/MaritalStatus";


const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    firstName: String,
    lastName: String,
    email: String,
    profilePhoto: String,
    headerImage: String,
    accountType: { type: String, default: 'PERSONAL', enum: AccountType },
    maritalStatus: { type: String, default: MaritalStatus.Single, enum: MaritalStatus },
    biography: String,
    dateOfBirth: Date,
    joined: { type: Date, default: Date.now },
    location: {
        latitude: { type: Number, default: 0.0 },
        longitude: { type: Number, default: 0.0 }
    }
}, { collection: 'users' });

export default UserSchema;
