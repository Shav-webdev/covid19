const express = require('express');
const pino = require('express-pino-logger')();
const serveStatic = require('serve-static');
const morgan = require('morgan');
const userRouter = require("./api/routes/user.routes");
let bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const app = express();

app.use(pino);
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/src'));
app.use(express.static(__dirname + '/server/api'));
app.use(serveStatic(__dirname + "/dist"));
app.use(morgan('combined'));
app.use(userRouter);

const PORT = process.env.PORT || 8081;

app.post("/user", jsonParser, (req, res)=> {
    console.log(req.body)
})


app.listen(PORT, err => {
    if (err) {
        console.log(err.message);
    }
    console.log(`Server is running on port ${PORT}...`);
});