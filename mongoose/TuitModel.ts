import mongoose from "mongoose";
import TuitSchema from "./TuitSchema";

const TuitModel = mongoose.model("Tuits", TuitSchema);
export default TuitModel;