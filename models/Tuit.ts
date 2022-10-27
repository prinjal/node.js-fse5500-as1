/**
 * @file Implements tuit class that stores all the fields pertaining to
 * a specific tuit.
 */

import User from "./User";

export default class Tuit {
    private tuit: string = '';
    private postedOn: Date = new Date();
    private postedBy: User | null = null;
    private comments: Tuit[] | null = null;
    private likes: Number | null = 0;

    constructor(data: any) {
        this.tuit = data.tuit;
        this.postedOn = data.postedOn;
        this.postedBy = data.postedBy;
        this.comments = data.comments;
        this.likes = data.likes;
    }

}