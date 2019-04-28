'use strict'

class AuthController {

  async login({ request, response, auth }) {
    const { username, password } = request.all()
    const authData = await auth.attempt(username, password)
    return response.json({
      message: "OK",
      access_token: authData.token
    })
  }  

}

module.exports = AuthController
