'use strict'

const Location = use("App/Models/Location")
const BaseController = use("App/Controllers/Http/BaseController")

class LocationController extends BaseController {

  constructor() {
    super(Location)
  }

  async createNewInstance({ request }) {
    const location = new Location()
    location.fill(request.only(this.storeOnly))
    await location.save()
    return location
  }
  
  async updateInstance({ instance, request }) {
    instance.merge(request.only(this.updateOnly))
    await instance.save()
  }

  /** Getter */
  get storeOnly() {
    return [
      "name", "description", "address", "thumbnail", "latitude", "longitude",
      "price_min", "price_max"
    ]
  }

  get updateOnly() {
    return [
      "name", "description", "address", "thumbnail", "latitude", "longitude",
      "price_min", "price_max"
    ]
  }

}

module.exports = LocationController