//Require
const path = require('path');
const express = require('express');
const morgan = require('morgan');

const app = express();

//Public folder
const publicFolderPath = path.resolve(__dirname, './public');
app.use(express.static(publicFolderPath));

//Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'))
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'))
});

//Server Up
app.listen(process.env.PORT || 3000, function () {
    console.log('Servidor corriendo en el puerto 3000');
})