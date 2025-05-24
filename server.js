require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const appController = require('./controllers/app.controller');

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, 'public')));

app.use(require("./routes/app.routes"));

app.use((req, res) => {
    res.status(404);
    appController.notFound(req, res);
});

app.listen(process.env.PORT, async () => {
    console.log(`Server is running on http://127.0.0.1:${process.env.PORT}`);

})

