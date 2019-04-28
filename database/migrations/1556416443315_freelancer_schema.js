'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FreelancerSchema extends Schema {
  up () {
    this.create('freelancers', (table) => {
      table.increments()
      table.string('username', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.string('full_name', 100).notNullable()
      table.string('headliner').notNullable().defaultTo('-')
      table.text('summary').notNullable().defaultTo('-')
      table.string("contact").notNullable().defaultTo('-')
      table.string('address').notNullable().defaultTo('-')
      table.string('position').notNullable().defaultTo('-')
      table.timestamps()
    })
  }

  down () {
    this.drop('freelancers')
  }
}

module.exports = FreelancerSchema
