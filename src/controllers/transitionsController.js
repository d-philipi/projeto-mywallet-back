import { transitionCollection } from "../database/db.js";
import dayjs from 'dayjs';

export async function getTransitions(req, res){
    const user = req.user;

    try {
        const transitions = await transitionCollection.find({email: user.email}).toArray();
        res.send(transitions);

    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export async function postTransition(req, res){
    const transition = req.body;
    const { email } = req.user;

    try{
        await transitionCollection.insertOne({...transition, email, date: dayjs().format('DD/MM')});
        res.sendStatus(201);
    }catch(err){
        console.log(err);
        res.sendStatus(500);
    }
}