const express = require('express')
const hbs = require('hbs')

require('dotenv').config();

const app = express()
const port = process.env.PORT

app.set('view engine', 'hbs');


hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public_html'));


app.get('/', (req, res)=>{
    res.render('home', {
        nombre: 'Sandra Tiney S. ',
        titulo: 'Portafolio | Home',
        profesion: 'Ingenieria en Sistemas',
        ocupacion: 'Estudiante de Ingenieria'
    })
})
app.get('/habilidades', (req, res) => {
    res.render('habilidades', {
        nombre: 'Sandra Tiney S. ',
        profesion: 'Ingenieria en Sistemas',
        titulo: 'Sobre mi | Leticia Tiney S.'
    });
});

app.get('/cv', (req, res) => {
    res.render('cv', {
        nombre: 'Sandra Tiney S. ',
        profesion: 'Ingenieria en Sistemas',
        titulo: 'Hoja de vida'
    });
});

app.get('/lenguajes', (req, res) => {
    res.render('lenguajes', {
        nombre: 'Sandra Tiney S. ',
        profesion: 'Ingenieria en Sistemas',
        titulo: 'Proyecto 1'
    });
});

app.get('/contacto', (req, res) => {
    res.render('contacto', {
        nombre: 'Sandra Tiney S. ',
        profesion: 'Ingenieria en Sistemas',
        titulo: 'Contacto'
    });
});

app.get('/calculadoraMRU', (req, res) => {
    res.render('calculadoraMRU', {
        nombre: 'Sandra Tiney S. ',
        profesion: 'Ingenieria en Sistemas',
        titulo: 'Proyecto 1'
    });
});
app.get('/restauranteML', (req, res) => {
    res.render('restauranteML', {
        nombre: 'Sandra Tiney S. ',
        profesion: 'Ingenieria en Sistemas',
        titulo: 'Proyecto 2'
    });
});
app.get('/paginaWebRailway', (req, res) => {
    res.render('paginaWebRailway', {
        nombre: 'Sandra Tiney S. ',
        profesion: 'Ingenieria en Sistemas',
        titulo: 'Proyecto 3'
    });
});

app.get('/ecommerce', (req, res) => {
    res.render('ecommerce', {
        nombre: 'Sandra Tiney S. ',
        profesion: 'Ingenieria en Sistemas',
        titulo: 'Proyecto 3'
    });
});

app.get('*', (req, res)=>{
    res.render('404')
})

app.listen(port, () => {
    console.log(`Ejemplo escuchando en http://localhost:${port}`);
})
