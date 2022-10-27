"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Tuit_1 = __importDefault(require("../models/Tuit"));
class TuitController {
    constructor(app, tuitDao) {
        this.findAllTuits = (req, res) => {
            this.tuitDao.findAllTuits()
                .then(tuits => res.json(tuits));
        };
        this.findTuitById = (req, res) => {
            this.tuitDao.findTuitsByID(req.params.tuitid).then(tuit => res.json(tuit));
        };
        this.findTuitsByUser = (req, res) => {
            this.tuitDao.findTuitsByUser(req.params.userid).then(tuits => res.json(tuits));
        };
        this.createTuit = (req, res) => {
            this.tuitDao.createTuit(new Tuit_1.default(req.body)).then(tuit => res.json(tuit));
        };
        this.updateTuit = (req, res) => {
            this.tuitDao.updateTuit(req.params.tuitid, req.body).then(tuit => res.json(tuit));
        };
        this.deleteTuit = (req, res) => {
            this.tuitDao.deleteTuit(req.params.tuitid).then(tuit => res.json(tuit));
        };
        this.app = app;
        this.tuitDao = tuitDao;
        this.app.get('/tuits', this.findAllTuits);
        this.app.get('/tuits/:tuitid', this.findTuitById);
        this.app.get('/:userid/tuits', this.findTuitsByUser);
        this.app.post('/tuits', this.createTuit);
        this.app.put('/tuits/:tuitid', this.updateTuit);
        this.app.delete('/tuits/:tuitid', this.deleteTuit);
    }
}
exports.default = TuitController;
