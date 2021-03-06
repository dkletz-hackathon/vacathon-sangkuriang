'use strict'

const Model = use('App/Models/ApiModel')
const Hash = use('Hash')

class User extends Model {

  static get hidden() {
    return ["password"]
  }

  static boot () {
    super.boot()
    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }
}

module.exports = User
