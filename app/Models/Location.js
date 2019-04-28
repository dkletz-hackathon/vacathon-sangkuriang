'use strict'

const Model = use('App/Models/ApiModel')

class Location extends Model {

  categories() {
    return this.hasMany("App/Models/LocationCategory")
  }

  type() {
    return this.belongsTo("App/Models/TypeLocation")
  }

  images() {
    return this.hasMany("App/Models/LocationImage")
  }

}

module.exports = Location
