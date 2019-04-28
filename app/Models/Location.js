'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('App/Models/ApiModel')

class Location extends Model {

  category() {
    return this.hasMany("App/Models/LocationCategory")
  }

  type() {
    return this.hasMany("App/Models/TypeLocation")
  }

}

module.exports = Location
