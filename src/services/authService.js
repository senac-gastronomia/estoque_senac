import conn, { connAdmin } from "../config/database.js";

const DOMINIOS_SENAC = ["sp.senac.br", "senacsp.edu.br"];

class AuthService {
    static validarDominioSenac(email) {
        const dominio = email?.toLowerCase().split("@")[1];
        return DOMINIOS_SENAC.includes(dominio);
    }

    static obterPerfilPadraoPorEmail(email) {
        return email?.toLowerCase().endsWith("@sp.senac.br") ? "Docente" : "Auxiliar";
    }

    static async obterOuCriarUsuarioPublico(id_usuario, email) {
        const { data: usuarioExistente, error: erroBusca } = await connAdmin
            .from("usuario")
            .select("*")
            .eq("id_usuario", id_usuario)
            .maybeSingle();

        if (erroBusca) throw erroBusca;

        if (usuarioExistente) {
            if (!usuarioExistente.ativo) {
                throw new Error("Usuário desativado no sistema.");
            }
            return usuarioExistente;
        }

        const perfilPadrao = this.obterPerfilPadraoPorEmail(email);
        const registroTemporario = Math.floor(100000 + Math.random() * 900000);

        const { data: novoUsuario, error: erroCriacao } = await connAdmin
            .from("usuario")
            .insert({
                id_usuario: id_usuario,
                perfil_usuario: perfilPadrao,
                num_registro: registroTemporario,
            })
            .select()
            .single();

        if (erroCriacao) throw erroCriacao;

        return novoUsuario;
    }

    static async loginMicrosoft() {
        const { data, error } = await conn.auth.signInWithOAuth({
            provider: "azure",
            options: {
                scopes: "email",
                redirectTo: "http://localhost:3600/autenticacao/callback",
                queryParams: {
                    prompt: "select_account",
                },
            },
        });

        if (error) throw error;
        return data;
    }

    static async handleCallback(code) {
        if (!code) {
            throw new Error("Código de autorização não fornecido.");
        }

        const { data, error } = await conn.auth.exchangeCodeForSession(code);

        if (error) throw error;

        const email = data?.user?.email || "";

        if (!this.validarDominioSenac(email)) {
            await conn.auth.signOut();
            throw new Error("Acesso permitido apenas com e-mail institucional do Senac.");
        }

        const dadosUsuario = await this.obterOuCriarUsuarioPublico(data.user.id, email);
        return { ...data, dadosUsuario };
    }

    static async autenticarComToken(accessToken) {
        if (!accessToken) {
            throw new Error("Token de acesso não fornecido.");
        }

        const { data, error } = await conn.auth.getUser(accessToken);

        if (error || !data?.user) {
            throw new Error("Sessão inválida ou expirada.");
        }

        const email = data.user.email || "";

        if (!this.validarDominioSenac(email)) {
            await connAdmin.auth.admin.deleteUser(data.user.id);
            throw new Error("Acesso permitido apenas com e-mail institucional do Senac.");
        }

        const dadosUsuario = await this.obterOuCriarUsuarioPublico(data.user.id, email);
        return { user: data.user, dadosUsuario };
    }
}

export default AuthService;