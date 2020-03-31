require('./config/config.js');

const express = require('express');
const app = express();

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

app.use(require('./routes/usuario.js'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/cafe', (err, res) => {

    if (err) throw err;

    console.log('Base de dato ONLINE');

});


app.listen(process.env.PORT, () => {
    console.log('Escuchando peticiones en el puerto:', process.env.PORT);
});