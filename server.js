import express from 'express';
import dotenv from 'dotenv';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import authRoutes from './src/routes/authRoutes.js';


//Carrega as variáveis de ambiente
dotenv.config();

// Define __dirname em ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Responsável pela API: definir rotas e processar requisições
const app = express();
const PORT = process.env.PORT;
const require = createRequire(import.meta.url);
const googleFonts = require('google-fonts');
const visibleIcon = require('@iconify/icons-basil/eye-solid').default;
const invisibleIcon = require('@iconify/icons-basil/eye-closed-outline').default;


app.get('/interface-config', (req, res) => {
    const fontFamily = googleFonts({ 'League Spartan': ['400', '700'] });
    const urlFonts = fontFamily.match(/href="([^"]+)"/)[1];

    res.json({
        urlComplete: `https:${urlFonts}`,
         icons: {
            visibleIcon: visibleIcon,
            invisibleIcon: invisibleIcon
        }
    });
});

app.use(express.json());
app.use(express.static("./src/view"));
app.use("/src/view", express.static("./src/view"));

app.use('/autenticacao', authRoutes);

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, 'src', 'view')));

app.get('/', (req, res) => {
    res.status(404).send('Aqui será a tela inicial.');
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'view', 'login.html'));
});

app.get('/apoio', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'view', 'apoio.dashboard.html'));
});

app.get('/apoio_cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'view', 'apoio_cadastro.html'));
});

app.get('/docente', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'view', 'docente.dashboard.html'));
});

app.get('/configuracoes', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'view', 'configuracoes.html'));
});

app.get('/turma', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'view', 'nova.solicitacao.html'));
});

app.get('/auxiliar', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'view', 'auxiliar.dashboard.html'));
});

// Página de Erro 404 (Caso a rota não exista)
app.use((req, res) => {
    res.status(404).send('Erro 404: Página não encontrada.');
});


app.listen(PORT, () => console.log(`Servidor rodando na porta http://localhost:${PORT}`));
