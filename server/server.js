const express = require('express');
const app = express();

app.get('/usuario', function(req, res) {
    res.json('get Usuario')
});

app.post('/usuario', function(req, res) {
    res.json('post Usuario')
});

app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;
    res.json({
        id
    });
});

app.delete('/usuario', function(req, res) {
    res.json('delete Usuario')
});


app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto:', 3000);
});