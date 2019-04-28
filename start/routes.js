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
  Route.resource('', 'UserController')
    .only(['update', 'store', 'show', 'index'])
    .middleware(new Map([
      [['update'], ['auth']]
    ]))
  Route.put('preference', 'UserController.updatePreferences')
    .middleware(["auth"])
})
  .prefix('user')

Route.group(() => {
  Route.post('login', 'AuthController.login')
})
  .prefix('auth')