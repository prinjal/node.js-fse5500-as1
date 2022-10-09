"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController_1 = __importDefault(require("./controllers/UserController"));
const UserDao_1 = __importDefault(require("./daos/UserDao"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors = require('cors');
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(cors());
app.use(express_1.default.json());
var userDao = new UserDao_1.default();
mongoose_1.default.connect('mongodb://127.0.0.1/assignment1')
    .then(() => console.log('Connected to MongoDB....'))
    .catch(err => console.error('Error', err));
//userDao.createUser(new User("alice", "alice123", "Alice", "Wonderland", "alice@wonderland.com"));
const userController = new UserController_1.default(app, new UserDao_1.default());
app.get('/', (req, res) => res.send('Welcome to Foundation of Software Engineering!!!!'));
app.get('/hello', (req, res) => res.send('Welcome to Foundation of Software Engineering!'));
/**
 * Start a server listening at port 4000 locally
 * but use environment variable PORT on Heroku if available.
 */
const PORT = 4200;
console.log(PORT);
app.listen(PORT);
