import data from "../data.js";

export function getTweets(req, res){
    try {
        res.status(200).json(data["tweets"]);
    } catch (error) {
        res.status(500).json({message:error});        
    }
}

export async function postTweets(req, res){
    try {
        let id = math.round(Math.random()*100000).toString();
        data["tweets"].push({id, ...req.body});
        res.json({id, ...req.body});
    } catch (error) {
        res.status(500).json({message:"Erreur detecte lors de la création"})
    }
}