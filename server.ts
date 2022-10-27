import express, { Request, Response } from 'express';
import UserController from './controllers/UserController';
import UserDao from './daos/UserDao';
import mongoose from "mongoose";
import User from './models/User';
import TuitController from './controllers/TuitController';
import TuitDao from './daos/TuitDao';
import FollowsController from './controllers/FollowsController';
import FollowsDao from './daos/FollowsDao';
import BookmarkController from './controllers/BookmarkController';
import BookmarkDao from './daos/BookmarkDao';
import MessageController from './controllers/MessageController';
import MessageDao from './daos/MessageDao';
import LikeController from './controllers/LikeController';
import LikeDao from './daos/LikeDao';

const cors = require('cors')

var app = express();
app.use(express.json());
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://prinjaldave:Pm@_07111996@cluster0.t05i0ok.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('Connected to MongoDB....'))
    .catch(err => console.error('Error', err));

//userDao.createUser(new User("alice", "alice123", "Alice", "Wonderland", "alice@wonderland.com"));
const bookmarkController = new BookmarkController(app, new BookmarkDao());
const userController = new UserController(app, new UserDao());
const tuitController = new TuitController(app, new TuitDao());
const followController = new FollowsController(app, new FollowsDao());
const messageController = new MessageController(app, new MessageDao());
const likeController = LikeController.getInstance(app);

app.get('/', (req: Request, res: Response) =>
    res.send('Welcome to Foundation of Software Engineering!!!!'));

app.get('/hello', (req: Request, res: Response) =>
    res.send('Welcome to Foundation of Software Engineering!'));

/**
 * Start a server listening at port 4000 locally
 * but use environment variable PORT on Heroku if available.
 */
const PORT = process.env.PORT || 4200;
console.log(PORT);
app.listen(PORT);
