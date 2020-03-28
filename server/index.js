const express = require("express");
const pino = require("express-pino-logger")();
const serveStatic = require("serve-static");
const morgan = require("morgan");
const userRouter = require("./api/routes/user.routes");
const { db } = require("./db/db");

const app = express();
app.use(pino);
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/src"));
app.use(express.static(__dirname + "/server/api"));
app.use(serveStatic(__dirname + "/dist"));
app.use(morgan("combined"));
app.use(userRouter);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, err => {
    if (err) {
        console.log(err.message);
    }
    console.log(`Server is running on port ${PORT}...`);
});
db(server);
