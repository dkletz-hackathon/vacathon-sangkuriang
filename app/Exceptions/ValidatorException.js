'use strict'

const SangkuriangException = use("App/Exceptions/SangkuriangException");

class ValidatorException extends SangkuriangException {

  constructor(errMessage) {
    const message = errMessage ? errMessage : "Input not suitable for this route";
    super(message);
  }

  /**
   * Handle this exception by itself
   */
  handle (error, { request, response }) {
    super.handleTransaction(request);
    return response.status(400).json({
      message: error.message,
      error: ValidatorException.name
    });
  }
}

module.exports = ValidatorException;
