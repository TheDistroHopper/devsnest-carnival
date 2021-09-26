const express = require('express');
const app = express();

app.use(logger);

app.get('/', (req, res) => {
    res.send("Home Page");
})

app.get('/users', auth, (req, res) => {
    console.log(`Admin login status : ${req.query.admin}`);
    res.send("Users Page");
})

function logger(req, res, next) {
    console.log(req.originalUrl);
    next();
}

function auth(req, res, next) {
    if (req.query.admin === 'true') {
        next();
    } else {
        res.send("No auth");
    }
}

app.listen(4000);