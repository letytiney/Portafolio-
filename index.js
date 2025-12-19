console.log('--- 1. INICIANDO APP ---'); // A
const express = require('express')
const hbs = require('hbs')

require('dotenv').config();

console.log('--- 2. DESPUÉS DE REQUIRE ---'); // B
const app = express()
const port = process.env.PORT || 3000;

app.set('view engine', 'hbs');


hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public_html'));


app.get('/', (req, res) => {
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

app.get('/lista_proyectos', (req, res) => {
    res.render('lista_proyectos', {
        nombre: 'Sandra Tiney S. ',
        profesion: 'Ingenieria en Sistemas',
        titulo: 'Lista de Proyectos'
    });
});

app.get('/ecommerce', (req, res) => {
    res.render('ecommerce', {
        nombre: 'Sandra Tiney S. ',
        profesion: 'Ingenieria en Sistemas',
        titulo: 'Proyecto 3'
    });
});

app.get('*', (req, res) => {
    res.render('404')
})
console.log('--- 3. ANTES DE APP.LISTEN ---'); // C
app.listen(port, '0.0.0.0', () => {
    console.log(`SERVIDOR ACTIVO en el puerto ${port}`);
})
