"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Follows {
    constructor(data) {
        this.userFollowed = 0;
        this.userFollowing = 0;
        this.userFollowed = data.userFollowed;
        this.userFollowing = data.userFollowing;
    }
}
exports.default = Follows;
