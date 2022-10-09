"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TuitController {
    constructor(app, tuitDao) {
        this.app = app;
        this.tuitDao = tuitDao;
        this.app.get('/tuits', this.findAllTuits);
        this.app.get('/tuits/:tuitid', this.findTuitById);
        this.app.get('/tuits/:userid', this.findTuitsByUser);
        this.app.post('/tuits', this.createTuit);
        this.app.put('/tuits/:tuitid', this.updateTuit);
        this.app.delete('/tuits/:tuitid', this.deleteTuit);
    }
    findAllTuits(req, res) {
        this.tuitDao.findAllTuits()
            .then(tuits => res.json(tuits));
    }
    findTuitById(req, res) {
        this.tuitDao.findTuitsByID(req.params.tuitid).then(tuit => res.json(tuit));
    }
    findTuitsByUser(req, res) {
        this.tuitDao.findTuitsByUser(req.params.userid).then(tuits => res.json(tuits));
    }
    createTuit(req, res) {
        this.tuitDao.createTuit(req.body).then(tuit => res.json(tuit));
    }
    updateTuit(req, res) {
        this.tuitDao.updateTuit(req.params.tuitid, req.body).then(tuit => res.json(tuit));
    }
    deleteTuit(req, res) {
        this.tuitDao.deleteTuit(req.params.tuitid).then(tuit => res.json(tuit));
    }
}
exports.default = TuitController;
