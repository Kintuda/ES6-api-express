export default class ErrorResponse {
  constructor (message, status, stacktrace) {
    this.status = status
    this.stack = stacktrace
    this.data = {
      sucess: false,
      message,
      data: []
    }
  }
}
