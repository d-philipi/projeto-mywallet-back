import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);
let db;

try {
  await mongoClient.connect();
  db = mongoClient.db("myBlog");
} catch (err) {
  console.log(err);
}


export const usersCollection = db.collection("users");
export const transitionCollection = db.collection("transitions");
export const sessionsCollection = db.collection("sessions");