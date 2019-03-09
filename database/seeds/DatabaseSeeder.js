'use strict'

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class DatabaseSeeder {
  async run () {
    const user = await Factory.model('App/Models/User')
      .create()

    const tag1 = await Factory.model('App/Models/Tag')
      .create()
    const tag2 = await Factory.model('App/Models/Tag')
      .create()

    await user.tags().save(tag1, model => {
      model.active = true
    })

    await user.tags().save(tag2)
  }
}

module.exports = DatabaseSeeder
