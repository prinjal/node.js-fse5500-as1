"use strict";
/**
 * @file Implements user class to store the fields pertaining
 * to the user's data.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AccountType_1 = __importDefault(require("./AccountType"));
const MaritalStatus_1 = __importDefault(require("./MaritalStatus"));
class User {
    constructor(data) {
        this.username = '';
        this.password = '';
        this.firstName = null;
        this.lastName = null;
        this.email = '';
        this.profilePhoto = null;
        this.headerImage = null;
        this.accountType = AccountType_1.default.Personal;
        this.maritalStauts = MaritalStatus_1.default.Single;
        this.biography = null;
        this.dateOfBirth = null;
        this.joined = new Date();
        this.location = null;
        this.username = data.username;
        this.password = data.password;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.email = data.email;
        this.profilePhoto = data.profilePhoto;
        this.headerImage = data.headerImage;
        this.accountType = data.accountType;
        this.maritalStauts = data.maritalStatus;
        this.biography = data.biography;
        this.dateOfBirth = data.dateOfBirth;
        this.joined = data.joined;
        this.location = data.location;
    }
}
exports.default = User;
