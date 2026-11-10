import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import authRoutes from './src/routes/authRoutes.js';
import { createRequire } from 'node:module';

// Configuração para resolver o diretório no ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Carrega as variáveis de ambiente
dotenv.config();

// Responsável pela API: definir rotas e processar requisições
const app = express();
const PORT = process.env.PORT || 3000;

const require = createRequire(import.meta.url);
const googlFonts = require('google-fonts');
const visibleIcon = require('@iconify/icons-basil/eye-solid.js').default;
const invisibleIcon = require('@iconify/icons-basil/eye-closed-outline.js').default;

app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'public')));
// Servir os arquivos estáticos a partir da pasta 'src/view'
app.use(express.static(path.join(__dirname, 'src', 'view')));

// Rota para a raiz (/) carregar o login.html automaticamente
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'view', 'login.html'));
});

// Endpoint de configurações de interface
app.get('/interface-config', (req, res) => {
    const fontFamily = googlFonts({'League Spartan': ['400', '700']});
    const urlFonts = fontFamily.match(/href="([^"]+)"/)[1];
    res.json({
        urlComplete: `https:${urlFonts}`,
        icons: {
            visibleIcon: visibleIcon,
            invisibleIcon: invisibleIcon
        }
    });
});

// Rotas da API
app.use('/autenticacao', authRoutes);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));