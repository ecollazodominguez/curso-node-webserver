require('dotenv').config();

const express = require('express')
const app = express()

const hbs = require('hbs');

const port = process.env.PORT;

//HandleBars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials')


// Servir contenido estático
app.use(express.static('public'))

app.get('/', function (req,res){
    res.render('home', {
        nombre: 'Fernando Herrera',
        titulo: 'Curso de Node'
    });
})

app.get('/generic', function (req,res){
    res.render('generic', {
        nombre: 'Fernando Herrera',
        titulo: 'Curso de Node'
    });
})

app.get('/elements', function (req,res){
    res.render('elements', {
        nombre: 'Fernando Herrera',
        titulo: 'Curso de Node'
    });
})

app.get('/generic', function (req,res){
    res.sendFile(__dirname + '/public/generic.html')
})

app.get('/elements', function (req,res){
    res.sendFile(__dirname + '/public/elements.html')
})

app.get('/*', function (req,res){
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port)