//arquivo principal para a utilização de rotas vindas de outros arquivos 
import express, { Request, Response } from 'express';
import path from 'path';
import mustache from 'mustache-express';

import mainRoutes from './routes/index';
import painelRoutes from './routes/painel';
import carsRoutes from './routes/carros';
import motosRoutes from './routes/motos';

const app = express();

//definição de qual template engine será utilizada
app.set('view engine', 'mustache');

//localização dos arquivos .html do projeto
app.set('views', path.join(__dirname, 'views'));

//usar a template engine
app.engine('mustache', mustache());


//express - pega essa pasta public e torna ela estática
app.use(express.static(path.join(__dirname, '../public')));

app.use(mainRoutes);
app.use('/painel', painelRoutes);
app.use('/carros', carsRoutes)
app.use('/motos', motosRoutes);

//erro 404 - rota não encontrada
app.use((request: Request, response: Response)=>{
    response.status(404).send("Página não encontrada!");
});

app.listen(3000);

