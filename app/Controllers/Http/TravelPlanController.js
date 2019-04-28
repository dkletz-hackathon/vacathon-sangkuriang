'use strict'

const BaseController = use("App/Controllers/Http/BaseController")
const TravelPlan = use("App/Models/TravelPlan")
const LocationPlan = use("App/Models/LocationPlan")
const ModelNotFoundException = use("App/Exceptions/ModelNotFoundException")

class TravelPlanController extends BaseController {

  constructor() {
    super(TravelPlan)
  }

  async show({ response, params }) {
    const plan = await TravelPlan.query()
      .where("id", params.id)
      .with("locationPlans.location")
      .with("statistic")
      .first()
    if (!plan) {
      throw new ModelNotFoundException(TravelPlan.name, params.id)
    }
    let statistic = await plan.statistic().first()
    if (!statistic) {
      statistic = await plan.statistic().create({
        travel_plan_id: plan.id
      })
    }
    statistic.total_view += 1
    await statistic.save()
    return response.json(plan)
  }

  async index({ request, response, auth }) {
    const filters = [["user_id", auth.user.id]]
    return await super.index({ request, response, filters })
  }

  async indexShared({ request, response }) {
    const filters = [["shared", true]]
    return await super.index({ request, response, filters })
  }

  async setShared({ params, response }) {
    const travelPlan = await TravelPlan.findOrError(params.id)
    travelPlan.shared = true
    await travelPlan.save()
    return response.join(travelPlan)
  }
  
  async store({ request, response, auth }) {
    const plan = new TravelPlan()
    let preferences = request.input("preferences", []).join(",")
    plan.fill(request.only(this.storeOnly))
    plan.merge({ preferences, user_id: auth.user.id, shared: false })
    let datas = request.input("location_plans")
    let locationPlans = []
    for (const data of datas) {
      const locationPlan = new LocationPlan()
      locationPlan.location_id = data
      locationPlans.push(locationPlan)
    }
    await plan.save()
    await plan.locationPlans().saveMany(locationPlans)
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

module.exports = TravelPlanController