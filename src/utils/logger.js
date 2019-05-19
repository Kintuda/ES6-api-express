import pino from 'pino'
const env = process.env

const createLogger = (env) => {
  if (env === 'development' || env === 'debug') {
    return pino({
      prettyPrint: true
    })
  }
  return pino()
}

export default createLogger(env.NODE_ENV)
