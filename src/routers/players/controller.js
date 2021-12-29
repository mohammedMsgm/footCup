import { PlayerModel } from "../../models/Player.js";

export const getAllPlayers = async (req, res, next) => {
    try {
        const players = await PlayerModel.find();
        res.status(200).json(players);
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
}
export const getPlayerById = async (req, res, next) => {
    try {
        const player =  await PlayerModel.findById(req.params.id)
        if (player) res.status(200).json(player);
            else res.status(404).json({message: 'player is not found'})
    } catch (error) {
        res.status(500).json({error : err.message})
        
    }
}