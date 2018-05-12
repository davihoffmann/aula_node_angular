const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const disciplinas = require('./disciplinas');
var app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get(`/${disciplinas.colecao}`, (req, res) => {
    res.send(disciplinas.lista());
});

app.get(`/${disciplinas.colecao}/:id`, (req, res) => {
    res.send(disciplinas.porId(req.params.id));
});


app.post(`/${disciplinas.colecao}`, (req, res) => {
    res.send(disciplinas.adiciona({ id: null, nome: req.body.nome, nomeProfessor: req.body.nomeProfessor }));
});

app.put(`/${disciplinas.colecao}/:id`, (req, res) => {
    res.send(disciplinas.altera({ id: req.params.id, nome: req.body.nome, nomeProfessor: req.body.nomeProfessor }));
});

app.put(`/${disciplinas.colecao}`, (req, res) => {
    res.send(disciplinas.altera({ id: req.body.id, nome: req.body.nome, nomeProfessor: req.body.nomeProfessor }));
});


app.delete(`/${disciplinas.colecao}/:id`, (req, res) => {
    console.log(req.params.id);
    res.send(disciplinas.remove(req.params.id));
});


app.listen(3000)
console.log("servidor rodando na porta 3000");