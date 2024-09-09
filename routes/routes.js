const express = require('express'); 
const router = express.Router(); 

// referência a controllers que serão utilizados nas rotas
const UsuariosController = require('../controllers/usuarios'); 
const ProdutosController = require('../controllers/produtos'); 
const CidadesController = require('../controllers/cidades');

// definição das rotas
router.get('/usuarios', UsuariosController.listarUsuarios); 
router.post('/usuarios', UsuariosController.cadastrarUsuarios); 
router.patch('/usuarios', UsuariosController.editarUsuarios); 
router.delete('/usuarios', UsuariosController.apagarUsuarios); 

router.get('/produtos', ProdutosController.listarProdutos); 
router.post('/produtos', ProdutosController.cadastrarProdutos); 
router.patch('/produtos', ProdutosController.editarProdutos); 
router.delete('/produtos', ProdutosController.apagarProdutos); 

router.get('/cidades', CidadesController.listarCidades); 


module.exports = router;
