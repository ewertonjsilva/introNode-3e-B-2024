const express = require('express'); 

const cors = require('cors'); 

const router = require('./routes/routes');

const app = express(); 

// const porta = process.env.PORT || 3333;
const porta = 3333;

app.listen(porta, () => {
    // console.log('Servidor iniciado na porta ' + porta); 
    console.log(`Servidor iniciado na porta ${porta}`);
});

app.get('/', (request, response) => {
    response.send('Minha API');
});
