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

//Server Up
app.listen(3000, () => console.log('Server running'))