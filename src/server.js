import server from './app'
import log from './utils/logger'
import process from 'process'
import dotenv from 'dotenv'

dotenv.config()

process.on('uncaughtException', error => {
  log.error(`Uncaught exception, Error: ${error}`)
  process.exit(1)
})

server.listen(process.env.PORT, error => {
  if (error) log.error(`Error while starting the server, Error: ${error}`)
  log.info(`Server started on port: ${process.env.PORT}`)
})
