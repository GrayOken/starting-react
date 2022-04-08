const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello world')
});

app.get('/cum', (req, res) => {
    res.send('CANT STOP')
});

app.listen(port, () => {
    console.log(`My app is running on ${port}`)
});