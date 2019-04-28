'use strict'

const Database = use("Database")
const Category = use("App/Models/Category")
const Location = use("App/Models/Location")
const LocationCategory = use("App/Models/LocationCategory")
const BaseController = use("App/Controllers/Http/BaseController")

class LocationController extends BaseController {

  constructor() {
    super(Location)
  }

  async show({ params, response }) {
    const relations = [{ name: "images", type: "fetch" }]
    return await super.show({ params, response, relations })
  }

  async createNewInstance({ request }) {
    const location = new Location()
    location.fill(request.only(this.storeOnly))
    await location.save()
    return location
  }
  
  async updateCategory({ request, response, params }) {
    const location = await Location.findOrError(params.id)
    const categories = await Category.query()
      .whereIn("id", request.input("categories", []))
      .fetch()
    request.trx = await Database.beginTransaction()
    for (const category of categories) {
      let locCategory = await LocationCategory.query()
        .where("id", category.id)
        .where("location", location.id)
        .first()
      if (!locCategory)  {
        locCategory = new LocationCategory()
        locCategory.location_id = location.id
        locCategory.category_id = categoryID
        locCategory.value = 0
      }
      locCategory.value += 1
      await locCategory.save(request.trx)
    }
    request.trx.commit()
    return response.json({ message: "OK" })
  }

  /** Getter */
  get storeOnly() {
    return [
      "name", "description", "address", "thumbnail", "latitude", "longitude",
      "price_min", "price_max", "type_id"
    ]
  }

  get updateOnly() {
    return [
      "name", "description", "address", "thumbnail", "latitude", "longitude",
      "price_min", "price_max", "type_id"
    ]
  }

}

module.exports = LocationController