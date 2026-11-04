import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './src/routes/authRoutes.js';

// Carrega as variáveis de ambiente
dotenv.config();

// Responsável pela API
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("./src/view/"));
app.use(express.json());
app.use("./src/view/pages", express.static("./src/view/pages"));

app.use('/autenticacao', authRoutes);

app.get('/', (req, res) => {
    res.sendFile('tabela.html', {
        root: './src/view/pages'
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});