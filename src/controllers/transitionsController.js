import { usersCollection, sessionsCollection } from "../database/db.js";

export async function getTransitions(req, res){

    try {
       
        //const transitions = await transitionsCollection.find().toArray();
        const transitions = [
            {
                date: "30/12",
                description: "Almoço com a mãe",
                value: "100",
                direction: false
            },
            {
                date: "27/12",
                description: "Venda",
                value: "200",
                direction: true
            },
            {
                date: "01/01",
                description: "Almoço com a mãe",
                value: "100",
                direction: false
            }
        ]
        res.send(transitions);

    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export async function postTransition(req, res){}