import Tuit from "../models/Tuit";
import User from "../models/User";

export default interface TuitDao {
    findAllTuits(): Promise<Tuit[]>;
    findTuitsByUser(uid: string): Promise<Tuit[] | null>;
    findTuitsByID(tid: string): Promise<Tuit | null>;
    createTuit(tuit: Tuit, uid: string): Promise<Tuit>;
    updateTuit(tid: string, tuit: Tuit): Promise<any>;
    deleteTuit(tid: String): Promise<any>;
    updateLikes(tid: String, newStats: any): Promise<any>
}