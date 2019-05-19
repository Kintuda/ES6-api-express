import log from '../utils/logger'
import ErrorResponse from '../formats/errorResponse'

export default (error, req, res, next) => {
  const statusCode = error.statusCode || 500
  const errorClass = new ErrorResponse('Error while processing request', statusCode, error.stacktrace || null)
  log.error(`Application error, Error: ${errorClass.stack}`)
  return res.status(errorClass.status).send(errorClass.data)
}
