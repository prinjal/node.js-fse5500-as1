export default class Follows {
    private userFollowed: Number = 0;
    private userFollowing: Number = 0;

    constructor(data: any) {
        this.userFollowed = data.userFollowed;
        this.userFollowing = data.userFollowing;
    }
}