const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');


const app = express();

mongoose.connect('mongodb+srv://Gabriel:Gabriel@cluster0-vhc6s.gcp.mongodb.net/DevRadarDB?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,    
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

// Metodos HTTP : GET, POST, PUT, DELETE

// PARAMS:
// Query Params: request.query (Filtros, ordenacao, paginacao)
// Route Params: request.params (Identificar um recurso na alteracao ou remocao)
// Body: request.body (Dados para criacao ou alteracao de um registro)

// MongoDB (nao-relacional)