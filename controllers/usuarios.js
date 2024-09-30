const db = require('../database/connection'); 

module.exports = {
    async listarUsuarios(request, response) {
        try {     
            
            const sql = `
                SELECT 
                usu_id, usu_nome, usu_email, usu_cpf, usu_dt_nasc, 
                usu_senha, usu_tipo, usu_ativo = 1 AS usu_ativo
                FROM usuarios;
            `;

            const usuarios = await db.query(sql); 

            const qtdUsuarios = usuarios[0].length;
            
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de usuários.', 
                dados: usuarios[0], 
                qtdUsuarios
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message, 
            });
        }
    }, 
    async cadastrarUsuarios(request, response) {
        try {      
            
            const { usu_nome, usu_cpf, usu_email, usu_senha, usu_tipo, usu_ativo, usu_dt_nasc } = request.body;

            const sql = `
                INSERT INTO usuarios 
                (usu_nome, usu_cpf, usu_email, usu_senha, usu_tipo, usu_ativo, usu_dt_nasc) 
                VALUES 
                (?, ?, ?, ?, ?, ?, ?);
            `;

            const dados = [usu_nome, usu_cpf, usu_email, usu_senha, usu_tipo, usu_ativo, usu_dt_nasc];

            const execSql = await db.query(sql, dados); 

            const usu_id = execSql[0].insertId;

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro de usuário efetuado com sucesso.', 
                dados: usu_id
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    }, 
    async editarUsuarios(request, response) {
        try {            
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Editar usuário.', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    }, 
    async apagarUsuarios(request, response) {
        try {            
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Apagar usuários.', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    }, 
};  
