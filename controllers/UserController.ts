import { Request, Response, Express } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import UserDao from "../daos/UserDao";
import UserControllerI from "../interfaces/UserController";
import User from "../models/User";

export default class UserController implements UserControllerI {
    app: Express;
    userDao: UserDao;
    constructor(app: Express, userDao: UserDao) {
        this.app = app;
        this.userDao = userDao;
        this.app.get('/users', this.findAllUsers);
        this.app.get('/users/name/:username', this.findUserByName);
        this.app.get('/users/:userid', this.findUserByID);
        this.app.post('/users', this.createUser);
        this.app.delete('/users/:userid', this.deleteUser);
        this.app.put('/users/:userid', this.updateUser);
    }
    findAllUsers = (req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>) => {
        this.userDao.findAllUsers()
            .then(users => res.json(users));
    }
    findUserByName = (req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>) => {
        this.userDao.findUserByName(req.params.username)
            .then(users => res.json(users));
    }
    findUserByID = (req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>) => {
        this.userDao.findUserById(req.params.userid)
            .then(user => res.json(user));
    }
    createUser = (req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>) => {
        this.userDao.createUser(new User(req.body))
            .then(user => res.json(user));
    }
    deleteUser = (req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>) => {
        this.userDao.deleteUser(req.params.userid)
            .then(user => res.json(user));
    }
    updateUser = (req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>) => {
        this.userDao.updateUser(req.params.userid, req.body)
            .then(user => res.json(user));
    }
}