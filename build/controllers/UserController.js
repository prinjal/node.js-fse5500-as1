"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserDao_1 = __importDefault(require("../daos/UserDao"));
const User_1 = __importDefault(require("../models/User"));
class UserController {
    constructor(app, userDao) {
        this.app = app;
        this.userDao = userDao;
        console.log(this.userDao);
        this.app.get('/users', (req, res) => {
            this.findAllUsers(req, res);
        });
        this.app.get('/users/:userid', (req, res) => {
            this.findUserByID(req, res);
        });
        this.app.post('/users', (req, res) => {
            this.createUser(req, res);
        });
        this.app.delete('/users/:userid', this.deleteUser);
        this.app.put('/users/:userid', this.updateUser);
    }
    findAllUsers(req, res) {
        this.userDao.findAllUsers()
            .then(users => res.json(users));
    }
    findUserByID(req, res) {
        this.userDao.findUserById(req.params.userid)
            .then(user => res.json(user));
    }
    createUser(req, res) {
        var use = new User_1.default(req.body);
        this.userDao = new UserDao_1.default();
        console.log(this.userDao);
        this.userDao.createUser(use)
            .then(user => res.json(user));
    }
    deleteUser(req, res) {
        this.userDao.deleteUser(req.params.userid)
            .then(user => res.json(user));
    }
    updateUser(req, res) {
        this.userDao.updateUser(req.params.userid, req.body)
            .then(user => res.json(user));
    }
}
exports.default = UserController;
