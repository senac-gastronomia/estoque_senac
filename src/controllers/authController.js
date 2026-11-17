import AuthService from "../services/authService.js";

class AuthController {
    static async cadastrar(req, res) {
        try {
            const {
                nome,
                email,
                senha
            } = req.body;

            if (!nome || !email || !senha) {
                return res
                    .status(400)
                    .json({ erro: `Preencha todos os campos obrigatórios` });
            }

            const resultado = await AuthService.cadastrar(
                nome, email, senha
            );

            return res.status(201).json({
                mensagem: `Cadastro feito com sucesso!`,
                usuario: resultado.user,
                requerConfirmacao: !resultado.session
            });
        }
        catch (erro) {
            return res.status(400).json({ erro: `Falha ao cadastrar: ${erro.message}` });
        }
    }

    static async login(req, res) {
        try {
            const {
                email,
                senha
            } = req.body;

            if (!email || !senha) {
                return res
                    .status(400)
                    .json({
                        erro: `Preencha todos os campos obrigatórios`
                    });
            }

            const resultado = await AuthService.login(
                email, senha
            );

            return res
                .status(200)
                .json({
                    mensagem: `Login feito com sucesso!`,
                    usuario: resultado.user,
                    token: resultado.session.access_token
                });
        }
        catch (erro) {
            return res
                .status(400)
                .json({
                    erro: `Falha ao logar: ${erro.message}`
                });
        }
    }

    // Método para iniciar o fluxo OAuth com a Microsoft
    static async loginMicrosoft(req, res) {
        try {
            const data = await AuthService.loginMicrosoft();
            return res.redirect(data.url);
        } catch (erro) {
            return res.status(400).json({ erro: `Falha ao iniciar login Microsoft: ${erro.message}` });
        }
    }

    // Método de callback corrigido após o retorno da Microsoft
    static async callbackMicrosoft(req, res) {
        try {
            const { code } = req.query;

            if (!code) {
                return res.status(400).json({ erro: "Código de autorização não encontrado na URL de callback." });
            }

            // Troca o código de autorização pela sessão real e dados do usuário no Supabase
            const resultado = await AuthService.handleCallback(code);

            // Opcional recomendado: Salvar o access_token em um Cookie seguro (HTTP-only)
            // para que as próximas requisições do front-end consigam autenticar o usuário.
            res.cookie('auth_token', resultado.session.access_token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 1000 * 60 * 60 * 24 * 7 // 7 dias
            });

            // Redireciona o usuário para o painel de docente autenticado
            return res.redirect('/docente');
        } catch (erro) {
            console.error("Erro no callback do Microsoft:", erro.message);
            // Em caso de erro, redireciona para a página de login informando a falha
            return res.redirect(`/login?erro=${encodeURIComponent(erro.message)}`);
        }
    }
}

export default AuthController;

