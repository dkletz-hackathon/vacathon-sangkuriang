'use strict'

const Category = use("App/Models/Category")
const BaseController = use("App/Controllers/Http/BaseController")

class CategoryController extends BaseController {

  constructor() {
    super(Category)
  }

}

module.exports = CategoryController