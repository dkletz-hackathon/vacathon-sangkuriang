'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  Route.get("profile", "UserController.profile")
    .middleware(["auth"])
  Route.resource('', 'UserController')
    .only(['update', 'store', 'show', 'index'])
    .middleware(new Map([
      [['update'], ['auth']]
    ]))
})
  .prefix('user')

Route.group(() => {
  Route.post('login', 'AuthController.login')
})
  .prefix('auth')

Route.group(() => {
  Route.get('type/all', 'TypeLocationController.indexAllType')
  Route.resource('type', 'TypeLocationController').apiOnly()
  Route.post('filter', 'LocationController.filterLocation')
  Route.put(':id/category', 'LocationController.updateCategory')
  Route.resource('', 'LocationController').apiOnly()
})
  .prefix('location')

Route.group(() => {
  Route.put(':id/shared', 'TravelPlanController.setShared')
    .middleware(["auth"])
  Route.get('history', 'TravelPlanController.indexHistory')
    .middleware(["auth"])
  Route.get('shared', 'TravelPlanController.indexShared')
  Route.resource('', 'TravelPlanController').apiOnly()
    .middleware(new Map([
      [['store', 'update', 'index'], ['auth']]
    ]))
})
  .prefix('plan')

Route.resource('category', 'CategoryController')
  .only(["show", "index"])