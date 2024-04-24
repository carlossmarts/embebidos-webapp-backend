const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.json('Hola mundo');
})

app.get('/saludo', (req, res)=>{
    console.log("hola mundo")
    res.json('hola mundo')
})

app.get('/alerta', (req, res)=>{
    console.log("Se recibio alerta de tipo " + req.query.tipo)
    res.json('alerta recibida')
})




app.listen(3000, ()=>{
    console.log('server on port 3000');
});