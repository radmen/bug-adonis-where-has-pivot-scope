'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserTagSchema extends Schema {
  up () {
    this.create('user_tags', (table) => {
      table.increments()
      table.timestamps()
      table.boolean('active')
      table.integer('user_id').unsigned()
      table.integer('tag_id').unsigned()
    })
  }

  down () {
    this.drop('user_tags')
  }
}

module.exports = UserTagSchema
