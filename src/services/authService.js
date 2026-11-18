import conn, { connAdmin } from "../config/database.js"

class AuthService {
    static async cadastrar(nome, email, senha, tipo_usuario) {
        //Cadastra no SUPABASE AUTH
        const { data: auth, error } = await conn.auth.signUp(
            {
                email,
                password: senha,
                options: {
                    data: {
                        display_name: nome,
                    }
                }
            }
        );
        if (error) throw error;

        //Obtém o UUID criado pela auth
        const id_usuario = auth.user.id;

        //Cadastra na tabela usuario(SCHEMA public)
        const { data: dadosUsuario, erro: erroUsuario } = await connAdmin.from("usuario").insert({
            id_usuario: id_usuario,
            perfil_usuario: tipo_usuario
        }).select.single();
        if (erroUsuario) {
            await connAdmin.auth.admin.deleteUser(id_usuario);
        }
        //Retorna os dados de auth.users e da tabela usuario (SCHEMA public)
        return data, dadosUsuario
    };

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
}

export default AuthService;