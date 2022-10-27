import User from "../models/User";
import UserModel from "../mongoose/UserModel";
import UserDaoI from "../interfaces/UserDao";

export default class UserDao implements UserDaoI {
    async findAllUsers(): Promise<User[]> {
        return await UserModel.find();
    }
    async findUserByName(username: String): Promise<User[]> {
        return await UserModel.find({ username: username });
    }
    async findUserById(uid: string): Promise<any> {
        return await UserModel.findById(uid);
    }
    async createUser(user: any): Promise<any> {
        return await UserModel.create(user);
    }
    async updateUser(uid: string, user: any): Promise<any> {
        return await UserModel.updateOne({ _id: uid }, { $set: user });
    }
    async deleteUser(uid: string): Promise<any> {
        return await UserModel.deleteOne({ _id: uid });
    }

}