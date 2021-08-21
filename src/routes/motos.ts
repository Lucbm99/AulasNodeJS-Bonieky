import { Router } from "express";
import { listagemModelos, motos } from "../controllers/motosController";

const router = Router(); 

router.get('/', motos);

router.get('/modelos-listagem', listagemModelos);

export default router;