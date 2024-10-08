const express = require (`express`);

const path = require (`path`);

const app = express ();

const PORT = 3000;

app.use(express.static('public'));

//rutas

app.get (`/`, (req, res) => {
    return res.sendFile (path.join (__dirname, `views`, `home.html`))
});

app.listen (PORT, (req, res) => {
    console.log (`Server running in http://localhost:${PORT}`)
});