'use strict'

const User = use("App/Models/User")
const BaseController = use("App/Controllers/Http/BaseController")


class UserController extends BaseController {

  constructor() {
    super(User)
  }

  async update({ request, response, auth }) {
    const user = auth.user
    user.merge(request.only(this.updateOnly))
    await user.save()
    return response.json(user)
  }

  async profile({ response, auth }) {
    return response.json(auth.user)
  }

  async createNewInstance({ request }) {
    const user = new User()
    user.fill(request.only(this.storeOnly))
    await user.save()
    return user
  }
  
  /** Getter */
  get storeOnly() {
    return ["username", "email", "password", "full_name", "information", "contact"]
  }

  get updateOnly() {
    return ["username", "email", "full_name", "information", "contact"]
  }

}

module.exports = UserController