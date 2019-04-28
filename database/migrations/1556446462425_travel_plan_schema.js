'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TravelPlanSchema extends Schema {
  up () {
    this.create('travel_plans', (table) => {
      table.increments()
      table.boolean("shared").defaultTo(false)
      table.string("title").notNullable().defaultTo("")
      table.text("content").notNullable().defaultTo("")
      table.string("preferences").notNullable().defaultTo("")
      table.datetime("start_date").notNullable()
      table.datetime("end_date").notNullable()
      table.integer("user_id").unsigned().notNullable()
      table.foreign("user_id")
        .references("users.id")
        .onDelete("cascade")
      table.timestamps()
    })
  }

  down () {
    this.drop('travel_plans')
  }
}

module.exports = TravelPlanSchema
