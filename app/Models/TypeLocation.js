'use strict'

const Model = use('App/Models/ApiModel')

class TypeLocation extends Model {

  locations() {
    return this.hasMany("App/Models/Location")
  }

}

module.exports = TypeLocation
