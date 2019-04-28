'use strict'

const Model = use('App/Models/ApiModel')

class TravelPlan extends Model {
  
  static get dates() {
    return super.dates.concat(["start_date", "end_date"])
  } 

  statistic() {
    return this.hasOne("App/Models/TravelPlanStatistic")
  }

  locationPlans() {
    return this.hasMany("App/Models/LocationPlan")
  }

}

module.exports = TravelPlan
