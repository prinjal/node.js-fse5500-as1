"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Message {
    constructor(data) {
        this.message = '';
        this.to = 0;
        this.from = 0;
        this.sentOn = new Date();
        this.message = data.message;
        this.to = data.to;
        this.from = data.from;
        this.sentOn = data.sentOn;
    }
}
exports.default = Message;
