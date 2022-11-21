import { transitionCollection } from "../database/db.js";
import dayjs from 'dayjs';

export async function getTransitions(req, res){

    try {
       
        //const transitions = await transitionCollection.find().toArray();
        const transitions = [
            {
                date: dayjs().format('DD/MM'),
                description: "Almoço com a mãe",
                value: 100,
                direction: false
            },
            {
                date: dayjs().format('DD/MM'),
                description: "Venda",
                value: 200,
                direction: true
            },
            {
                date: dayjs().format('DD/MM'),
                description: "Almoço com a mãe",
                value: 100,
                direction: false
            }
        ]
        res.send(transitions);

    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export async function postTransition(req, res){
    const transition = req.body;

    try{
        await transitionCollection.insertOne(transition);
        res.sendStatus(201);
    }catch(err){
        console.log(err);
        res.sendStatus(500);
    }
}