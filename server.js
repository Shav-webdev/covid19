const express = require("express");
const serverStatic = require("serve-static");
const path = require("path");

const app = express();

app.use("/", serverStatic(path.join(__dirname, "/dist")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
    if (err) {
        console.log(err.message);
    }
    console.log(`Server is running on port ${PORT}...`);
});
