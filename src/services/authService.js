import conn from "../config/database.js";

class AuthService {
    static async cadastrar(nome, email, senha) {
        const { data, error } = await conn.auth.signUp(
            {
                email,
                password: senha,
                options: {
                    data: {
                        nome
                    }
                }
            }
        );
        if (error) throw error;
        return data;
    }

    static async login(email, senha) {
        const { data, error } = await conn.auth.signInWithPassword(
            {
                email,
                password: senha
            }
        );
        if (error) throw error;
        return data;
    }

    static async loginMicrosoft() {
        const { data, error } = await conn.auth.signInWithOAuth({
            provider: 'azure',
            options: {
                redirectTo: 'http://localhost:3000/autenticacao/callback',
                queryParams: {
                    prompt: 'select_account',
                    // Adicione esta linha com o e-mail que você quer fixar:
                    login_hint: 'kadu.com2008@gmail.com' // <-- Substitua pelo e-mail correto da Microsoft
                }
            }
        });

        if (error) throw error;
        return data;
    }
}

export default AuthService;