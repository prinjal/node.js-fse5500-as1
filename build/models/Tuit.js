"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Tuit {
    constructor(data) {
        this.tuit = '';
        this.postedOn = new Date();
        this.postedBy = null;
        this.comments = null;
        this.likes = 0;
        this.tuit = data.tuit;
        this.postedOn = data.postedOn;
        this.postedBy = data.postedBy;
        this.comments = data.comments;
        this.likes = data.likes;
    }
}
exports.default = Tuit;
