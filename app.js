const express = require('express')
const hbs = require('hbs')
const path = require('path');
require('dotenv').config();

const app = express()
const port = process.env.PORT

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


hbs.registerPartials(__dirname + '/views/partials')

//app.use(express.static('public'));
// Usa la ruta absoluta para mayor seguridad
app.use(express.static(path.join(__dirname, 'public_html')));
//app.use(express.static('public_html'))

app.get('/', (req, res)=>{
    res.render('home', {
        nombre: 'Sandra Tiney S. ',
        titulo: 'Portafolio | Leticia Tiney S.',
        profesion: 'Ingenieria en Sistemas',
        ocupacion: 'Estudiante de Ingenieria'
    })
})
app.get('/sobremi', (req, res) => {
    res.render('sobremi', {
        titulo: 'Sobre mi | Leticia Tiney S.'
    });
});

app.get('/cv', (req, res) => {
    res.render('cv', {
        titulo: 'Hoja de vida'
    });
});

app.get('/lenguajes', (req, res) => {
    res.render('lenguajes', {
        titulo: 'Lenguaje que domino'
    });
});

app.get('/contacto', (req, res) => {
    res.render('contacto', {
        titulo: 'Contacto'
    });
});






app.get('*', (req, res)=>{
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`Ejemplo escuchando en http://localhost:${port}`);
})
