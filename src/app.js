import express from 'express';
import conexao from './app/database/conexao.js';
import SelecaoController from './app/Controllers/selecaoControlles.js';
const app = express();

app.use(express.json());

app.get('/selecoes', SelecaoController.index) 

app.get('/selecoes/:id', SelecaoController.show)

app.post('/selecoes', SelecaoController.store)

app.delete('/selecoes/:id', SelecaoController.update);

app.put('/selecoes/:id', SelecaoController.delete);

export default app;
