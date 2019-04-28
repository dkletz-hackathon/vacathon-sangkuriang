'use strict'

const SangkuriangException = use("App/Exceptions/SangkuriangException");

class AccessException extends SangkuriangException {
  
  constructor() {
    super("Access not granted for this user");
  }

  /**
   * Handle this exception by itself
   */
  handle (error, { request, response }) {
    super.handleTransaction(request);
    return response.status(401).json({
      message: error.message,
      error: AccessException.name
    });
  }
  
}

module.exports = AccessException;
