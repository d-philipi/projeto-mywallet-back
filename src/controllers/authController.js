import bcrypt from "bcrypt";
import { v4 as uuidV4 } from "uuid";
import { usersCollection, sessionsCollection } from "../database/db.js";


export async function signIn(req, res){
    const user = req.body;
}

export async function signUp(req, res){

}