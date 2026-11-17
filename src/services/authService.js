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
            redirectTo: 'http://localhost:3000/autenticacao/callback', // Deve ser idêntica à cadastrada no Supabase
            queryParams: {
                prompt: 'select_account' 
            }
        }
    });

    if (error) throw error;
    return data;
}
    // Novo método para processar o retorno do Azure/Supabase na rota de callback
    static async handleCallback(code) {
        const { data, error } = await conn.auth.exchangeCodeForSession(code);
        
        if (error) throw error;
        
        // Retorna a sessão e o usuário coletados com sucesso
        return data; 
    }
}

export default AuthService;