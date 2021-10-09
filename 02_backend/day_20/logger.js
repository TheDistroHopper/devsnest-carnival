const {createLogger, format, log, transports, level} = require('winston')

const logFormat = format.printf(({message, level, timestamp}) => {
  return `${timestamp} ${level} ${message}`
})

const prodFormat = format.combine(
  format.timestamp({
    format: "YYYY-MM-DD HH:mm:ss",
  }),
  logFormat,
)

const devFormat = format.combine(
  format.timestamp({
    format: "YYYY-MM-DD HH:mm:ss",
  }),
  logFormat,
)

const devTransports = [
  new transports.Console({
    json: true,
    colorize: true
  })
]

const prodTransports = [
  new transports.File({filename: "logs/error.log", level: "error"}),
  new transports.File({filename: "logs/all.log", level: "debug"})
]

const logger = createLogger({
  level: process.env.NODE_ENV === "production" ? "info" : "debug",
  format: process.env.NODE_ENV === "production" ? prodFormat : devFormat,
  transports: process.env.NODE_ENV === "production" ? prodTransports : devTransports,
})

module.exports = logger;
module.exports.prodTransports = prodTransports
