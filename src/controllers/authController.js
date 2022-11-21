import bcrypt from "bcrypt";
import { v4 as uuidV4 } from "uuid";
import { usersCollection, sessionsCollection } from "../database/db.js";


export async function signUp(req, res){
    const user = req.body;

    try {
        const hashPassword = bcrypt.hashSync(user.password, 10);
        await usersCollection.insertOne({ ...user, password: hashPassword });
        res.sendStatus(201);
      } catch (err) {
        console.log("Erro no  controller SignIn",err);
        res.sendStatus(500);
      }
}

export async function signIn(req, res){

    const { userExiste } = req.userSignIn;
    const token = uuidV4();

    try {
        await sessionsCollection.insertOne({
            token,
            userId: userExiste._id,
        });

        res.send({ token });
    } catch (err) {
        console.log("Erro no  controller SignUp",err);
        res.sendStatus(500);
    }
}