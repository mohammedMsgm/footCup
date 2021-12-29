import express from 'express';
import { getAllPlayers } from "./controller.js";
import { getPlayerById }from "./controller.js";
const router = express.Router();
// get all players

router.get('/all', getAllPlayers);
router.get('/:id', getPlayerById); 
// get player by id

// update player by id

// delete player
export default router;