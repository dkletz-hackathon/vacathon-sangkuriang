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
  Route.resource('type', 'TypeLocationController').apiOnly()
  Route.put('category', 'LocationController.updateCategory')
  Route.resource('', 'LocationController').apiOnly()
})
  .prefix('location')

Route.group(() => {
  Route.get('shared', 'TravelPlanController.indexShared')
  Route.resource('', 'TravelPlanController').apiOnly()
    .middleware(new Map([
      [['store', 'update', 'index'], ['auth']]
    ]))
})
  .prefix('plan')

Route.resource('category', 'CategoryController')
  .only(["show", "index"])