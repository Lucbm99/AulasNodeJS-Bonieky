import { Router } from 'express';
import { noticias, painel } from '../controllers/painelController';

const router = Router();

router.get('/', painel);

router.get('/noticias', noticias);

export default router; 