'use strict'

const Model = use('App/Models/ApiModel')

class LocationPlan extends Model {
  
  location() {
    return this.belongsTo("App/Models/Location")
  }

}

module.exports = LocationPlan
