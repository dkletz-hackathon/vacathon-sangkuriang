'use strict'

const SangkuriangException = use("App/Exceptions/SangkuriangException");

class ModelNotFoundException extends SangkuriangException {

  constructor(className, id) {
    super(`${className} with ${id} not found`);
  }

  /**
   * Handle this exception by itself
   */
  handle (error, { request, response }) {
    super.handleTransaction(request);
    return response.status(404).json({
      message: error.message,
      error: ModelNotFoundException.name
    });
  }

}

module.exports = ModelNotFoundException;