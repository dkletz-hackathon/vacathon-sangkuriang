'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions');

class SangkuriangException extends LogicalException {
  
  constructor(...args) {
    super(...args);
  }

  handleTransaction (request) {
    if (request.trx) {
      request.trx.rollback();
    }
  }
}

module.exports = SangkuriangException;