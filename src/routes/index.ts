import {Router} from 'express';
import { calculoAction, calculoForm } from '../controllers/calculoController';
import { home } from '../controllers/homeController';
import { contato, empresa, sobre } from '../controllers/infoController';
import { idadeAction, idadeForm, nome } from '../controllers/userController';

const router = Router();

//página inicial do site
router.get('/', home);

//informações estáticas
router.get('/contato', contato);
router.get('/sobre', sobre);
router.get('/empresa', empresa);

//informações do usuário
router.get('/nome', nome);
router.get('/idade', idadeForm);
router.post('/idade-resultado', idadeAction)

//calculo quadrado
router.get('/quadrado', calculoForm);
router.post('/quadrado-resultado', calculoAction);

export default router; 