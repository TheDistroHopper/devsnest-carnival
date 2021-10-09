require('dotenv').config()
const express = require('express')
const logger = require("./logger")
const expressWinston = require('express-winston');
const winston = require('winston')
const app = express()


app.use(expressWinston.logger({
  transports: [
    new winston.transports.Console({
      json: true,
      colorize: true
    })
  ]
}));

app.get('/', function (req, res) {
  res.send('hello world')
})
app.listen(3000)

logger.error("occured")
logger.warn("message")
logger.info("message")
logger.debug("message")
