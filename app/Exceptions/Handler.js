'use strict'

const Env = use('Env');

const BaseExceptionHandler = use('BaseExceptionHandler')

/**
 * This class handles all exceptions thrown during
 * the HTTP request lifecycle.
 *
 * @class ExceptionHandler
 */
class ExceptionHandler extends BaseExceptionHandler {
  /**
   * Handle exception thrown during the HTTP lifecycle
   *
   * @method handle
   *
   * @param  {Object} error
   * @param  {Object} options.request
   * @param  {Object} options.response
   *
   * @return {void}
   */
  async handle(error, { request, response, params }) {
    
    // Trx is database transaction
    if (request.trx) {
      request.trx.rollback();
    }

    if (error.code === "E_VALIDATION_FAILED") {
      return response.status(400).json({
        message: error.messages,
        error: "ValidatorException"
      });
    }

    if (error.code === "ER_TRUNCATED_WRONG_VALUE_FOR_FIELD") {
      return response.status(500).send({
        error: error.code,
        message: "There is something wrong with our query"
      });
    }

    if (error.code === "E_INVALID_JWT_TOKEN") {
      return response.status(401).json({
        message: error.message,
        error: "AuthenticationException"
      });
    }
    
    const message = Env.get("NODE_ENV") === "development" ? error.message : `Internal server error`
    response.status(500).send(message);
    return super.handle(...arguments);
  }

  /**
   * Report exception for logging or debugging.
   *
   * @method report
   *
   * @param  {Object} error
   * @param  {Object} options.request
   *
   * @return {void}
   */
  async report (error, { request }) {
  }
}

module.exports = ExceptionHandler
