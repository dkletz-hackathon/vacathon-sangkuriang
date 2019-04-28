'use strict'

const TypeLocation = use("App/Models/TypeLocation")
const BaseController = use("App/Controllers/Http/BaseController")

class TypeLocationController extends BaseController {

  constructor() {
    super(TypeLocation)
  }

  async createNewInstance({ request }) {
    const typeLocation = new TypeLocation()
    typeLocation.fill(request.only(this.storeOnly))
    await typeLocation.save()
    return typeLocation
  }

  get storeOnly() {
    return ["name"]
  }

  get updateOnly() {
    return ["name"]
  }

}

module.exports = TypeLocationController