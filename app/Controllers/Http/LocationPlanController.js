'use strict'

const BaseController = use("App/Controllers/Http/BaseController")
const TravelPlan = use("App/Models/TravelPlan")
const LocationPlan = use("App/Models/LocationPlan")

class LocationPlanController extends BaseController {

  constructor() {
    super(LocationPlan)
  }

  async show({ response, params }) {
    const relations = [
      { name: "locationPlans", type: "fetch" },
      { name: "statictic", type: "first" }
    ]
    return await super.show({ params, response, relations })
  }

  async index({ request, response, auth }) {
    const filters = [["user_id", auth.user.id]]
    return await super.index({ request, response, filters })
  }

  async indexShared({ request, response }) {
    const filters = [["shared", true]]
    return await super.index({ request, response, filters })
  }

  async store({ request, response, auth }) {
    const plan = new TravelPlan()
    let preferences = request.input("preferences", [])
    preferences = preferences.join(",")
    plan.fill(request.only(this.storeOnly))
    plan.preferences = preferences
    plan.user_id = auth.user.id
    plan.shared = false
    await plan.save()
    return response.status(201).json(plan)
  }
  
  /** Getter */
  get storeOnly() {
    return ["title", "content", "start_date", "end_date"]
  }

  get updateOnly() {
    return ["title", "content", "start_date", "end_date"]
  }

}

module.exports = LocationPlanController