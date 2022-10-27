"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController_1 = __importDefault(require("./controllers/UserController"));
const UserDao_1 = __importDefault(require("./daos/UserDao"));
const mongoose_1 = __importDefault(require("mongoose"));
const TuitController_1 = __importDefault(require("./controllers/TuitController"));
const TuitDao_1 = __importDefault(require("./daos/TuitDao"));
const FollowsController_1 = __importDefault(require("./controllers/FollowsController"));
const FollowsDao_1 = __importDefault(require("./daos/FollowsDao"));
const BookmarkController_1 = __importDefault(require("./controllers/BookmarkController"));
const BookmarkDao_1 = __importDefault(require("./daos/BookmarkDao"));
const MessageController_1 = __importDefault(require("./controllers/MessageController"));
const MessageDao_1 = __importDefault(require("./daos/MessageDao"));
const cors = require('cors');
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(cors());
app.use(express_1.default.json());
mongoose_1.default.connect('mongodb://127.0.0.1/assignment1')
    .then(() => console.log('Connected to MongoDB....'))
    .catch(err => console.error('Error', err));
//userDao.createUser(new User("alice", "alice123", "Alice", "Wonderland", "alice@wonderland.com"));
const bookmarkController = new BookmarkController_1.default(app, new BookmarkDao_1.default());
const userController = new UserController_1.default(app, new UserDao_1.default());
const tuitController = new TuitController_1.default(app, new TuitDao_1.default());
const followController = new FollowsController_1.default(app, new FollowsDao_1.default());
const messageController = new MessageController_1.default(app, new MessageDao_1.default());
app.get('/', (req, res) => res.send('Welcome to Foundation of Software Engineering!!!!'));
app.get('/hello', (req, res) => res.send('Welcome to Foundation of Software Engineering!'));
/**
 * Start a server listening at port 4000 locally
 * but use environment variable PORT on Heroku if available.
 */
const PORT = process.env.PORT || 4200;
console.log(PORT);
app.listen(PORT);