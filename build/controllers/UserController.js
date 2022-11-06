"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../models/User"));
class UserController {
    constructor(app, userDao) {
        this.findAllUsers = (req, res) => {
            this.userDao.findAllUsers()
                .then(users => res.json(users));
        };
        this.findUserByName = (req, res) => {
            this.userDao.findUserByName(req.params.username)
                .then(users => res.json(users));
        };
        this.findUserByID = (req, res) => {
            this.userDao.findUserById(req.params.userid)
                .then(user => res.json(user));
        };
        this.createUser = (req, res) => {
            this.userDao.createUser(new User_1.default(req.body))
                .then(user => res.json(user));
        };
        this.deleteUser = (req, res) => {
            this.userDao.deleteUser(req.params.userid)
                .then(user => res.json(user));
        };
        this.deleteUserByUserName = (req, res) => {
            this.userDao.deleteUserByUserName(req.params.username)
                .then(user => res.json(user));
        };
        this.updateUser = (req, res) => {
            this.userDao.updateUser(req.params.userid, req.body)
                .then(user => res.json(user));
        };
        this.app = app;
        this.userDao = userDao;
        this.app.get('/api/users', this.findAllUsers);
        this.app.get('/api/users/name/:username', this.findUserByName);
        this.app.get('/api/users/:userid', this.findUserByID);
        this.app.post('/api/users', this.createUser);
        this.app.delete('/api/users/:userid', this.deleteUser);
        this.app.get('/api/users/username/:username/delete', this.deleteUserByUserName);
        this.app.put('/api/users/:userid', this.updateUser);
    }
}
exports.default = UserController;
