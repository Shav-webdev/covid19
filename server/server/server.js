const express = require('express');
const pino = require('express-pino-logger')();

const app = express();

app.use(pino);
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/src'));
app.use(express.static(__dirname + '/server/api'));

const PORT = process.env.PORT || 3001;

app.listen(PORT, err => {
    if (err) {
        console.log(err.message);
    }
    console.log(`Server is running on port ${PORT}...`);
});