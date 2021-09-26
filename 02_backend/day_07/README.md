# Day 7

```js
const express = require("express");

const app = express();

app.listen(4000);

const slash = (req, res) => {
    res.status(200).send("Hello");
}

const que = (req, res) => {
    res.json({ a: 1, b: 2 });
}

const info = (req, res) => {
    res.send(req.query);
}

const hw = (req, res) => {
    res.send("Hello, World.");
}

const dy = (req, res) => {
    res.send(req.params);
}

app.get('/', slash);
app.get('/que', que);
app.get('/info?', info); // 'o' is optional
app.get('/in(fo)?', info); // 'fo' is optional
app.get('/hel+o', hw); // 'l' can be used many times
app.get('/s*e', hw); // '*' can be replaced with any string

// Regex can also be used
app.get(/s/, hw); // Any string containing 's' is allowed
app.get('/name/:userName/age/:userAge', dy); // Dynamic parameters
```

#### HTTP response status codes
```txt
Informational responses (100–199)
Successful responses (200–299)
Redirects (300–399)
Client errors (400–499)
Server errors (500–599)

Example:
1.100 Continue
2.200 OK
3.302 Found
4.400 Bad Request
```