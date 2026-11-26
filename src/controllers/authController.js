import AuthService from "../services/authService.js";

const ROTAS_POR_PERFIL = {
    Apoio: "/apoio",
    Docente: "/docente",
    Auxiliar: "/auxiliar",
};

class AuthController {
    static async loginMicrosoft(req, res) {
        try {
            const { url } = await AuthService.loginMicrosoft();
            return res.redirect(url);
        } catch (erro) {
            return res.redirect(`/login?erro=${encodeURIComponent(erro.message)}`);
        }
    }

    static async handleCallback(req, res) {
        const { code, error, error_description } = req.query;

        if (error) {
            const mensagem = encodeURIComponent(error_description || "Acesso negado.");
            return res.redirect(`/login?erro=${mensagem}`);
        }

        if (!code) {
            return res.redirect("/login");
        }

        try {
            const { dadosUsuario } = await AuthService.handleCallback(code);
            const destino = ROTAS_POR_PERFIL[dadosUsuario?.perfil_usuario] || "/docente";
            return res.redirect(destino);
        } catch (erro) {
            return res.redirect(`/login?erro=${encodeURIComponent(erro.message)}`);
        }
    }

    static async validarTokenMicrosoft(req, res) {
        try {
            const { access_token } = req.body;
            const { user, dadosUsuario } = await AuthService.autenticarComToken(access_token);
            const destino = ROTAS_POR_PERFIL[dadosUsuario?.perfil_usuario] || "/docente";
            return res.status(200).json({ usuario: user, dadosUsuario, destino });
        } catch (erro) {
            return res.status(403).json({ erro: erro.message });
        }
    }
}

export default AuthController;