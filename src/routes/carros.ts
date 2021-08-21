import { Router } from "express";
import { cars, listagem, modelos } from "../controllers/carsController";

const router = Router();

router.get('/', cars);

router.get('/listagem', listagem);

router.get('/modelos', modelos);

export default router;